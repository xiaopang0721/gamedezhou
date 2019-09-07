/**
* name
*/
module gamedezhou.story {
	const enum MAP_STATUS {
		MAP_STATE_READY = 0, //准备阶段
		MAP_STATE_WASH_CARD = 1,//洗牌阶段
		MAP_STATE_DEAR_CARD = 2,//发牌阶段
		MAP_STATE_BEGIN = 3,//开始游戏
		MAP_STATE_DEAR_PUBLIC = 4, //发公共牌
		MAP_STATE_SHOW_CARD = 5,//摊牌阶段
		MAP_STATE_SETTLE = 6,//结算阶段
		MAP_STATE_SHOW_GAME = 7,//展示阶段
	}
	export class DezhouStory extends gamecomponent.story.StoryNormalBase {
		private _dezhouMgr: DezhouMgr;
		private _cardsTemp: any = [];
		private _dezhouMapInfo: DezhouMapInfo;
		private _openCards: Array<number> = [];

		constructor(v: Game, mapid: string, maplv: number) {
			super(v, mapid, maplv);
			this.init();
		}

		init() {
			super.init();
			if (!this._dezhouMgr) {
				this._dezhouMgr = new DezhouMgr(this._game);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(DezhouMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);

			this.onIntoNewMap();
		}

		get dezhouMgr() {
			return this._dezhouMgr;
		}

		set mapLv(lv: number) {
			this.maplv = lv;
		}

		get mapLv() {
			return this.maplv;
		}

		private createObj(u: Unit) {
			let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, DezhouData) as DezhouData;
			card.pos = new Vector2(782, 185);
			card.rotateAngle = 65;
			return card;
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;

			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			this._game.uiRoot.HUD.open(DezhouPageDef.PAGE_DEZHOU_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._dezhouMapInfo = mapinfo as DezhouMapInfo;
			if (!mapinfo) {
				this._dezhouMgr.unitOffline = this._offlineUnit;
			} else {
				if (mapinfo.GetMapState() == MAP_STATUS.MAP_STATE_SHOW_GAME) {
					this._game.network.call_dezhou_continue();
				}
				this.onUpdateState();
				this.onUpdateCardInfo();
			}
		}

		private onUpdateState(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (mainUnit.GetIndex() == 0) return;
			let statue = mapinfo.GetMapState();
			switch (statue) {
				case MAP_STATUS.MAP_STATE_DEAR_CARD://发牌
					if (this._dezhouMgr.isDealCard) return;
					this.updateCardsCount();
					let handle = new Handler(this, this.createObj);
					this._dezhouMgr.Init(this._cardsTemp, handle);
					this._dezhouMgr.sort();
					this._dezhouMgr.fapai();
					this._dezhouMgr.isDealCard = true;
					break;
			}
		}

		//断线重连,重发下牌
		private onUpdateCardInfo(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (mainUnit.GetIndex() == 0) return;
			let statue = mapinfo.GetMapState();
			if (statue > MAP_STATUS.MAP_STATE_READY && statue < MAP_STATUS.MAP_STATE_SHOW_GAME) {
				this.calculateCards();
				this.isReConnected = true;
				if (this._dezhouMgr.isDealCard) return;
				if (statue > MAP_STATUS.MAP_STATE_DEAR_CARD) {
					let handle = new Handler(this, this.createObj);
					this._dezhouMgr.Init(this._cardsTemp, handle);
					this._dezhouMgr.sort();
					this._dezhouMgr.refapai();
					this._dezhouMgr.isDealCard = true;
				}
			}
		}

		//算下在场几个人来定牌数
		private updateCardsCount(): void {
			let card = [1, 2];
			this._cardsTemp = [];
			for (let index = 1; index < 10; index++) {
				let unit = this._game.sceneObjectMgr.getUnitByIdx(index)
				if (unit) {
					this._cardsTemp = this._cardsTemp.concat(card);
				}
			}
		}

		//断线重连算下牌数
		private calculateCards(): void {
			let mapInfo = this._game.sceneObjectMgr.mapInfo as data.DezhouMapInfo;
			let battleInfoMgr = mapInfo.battleInfoMgr;
			let card = [1, 2];
			this._cardsTemp = [];
			for (let index = 1; index < 10; index++) {
				let unit = this._game.sceneObjectMgr.getUnitByIdx(index)
				if (unit) {
					this._cardsTemp = this._cardsTemp.concat(card);
				}
			}
			for (let i = 0; i < battleInfoMgr.info.length; i++) {
				let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo instanceof gamecomponent.object.BattleInfoAsk) {	//公共牌
					this._cardsTemp.push(battleInfo.Card);
				}
			}
		}

		createofflineUnit() {
			//创建假精灵
			let unitOffline = new UnitOffline(this._game.sceneObjectMgr);
			let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			if (mainPlayer) {
				unitOffline.SetStr(UnitField.UNIT_STR_NAME, mainPlayer.playerInfo.nickname);
				unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, mainPlayer.playerInfo.headimg);
				unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, mainPlayer.playerInfo.money);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, mainPlayer.GetQiFuEndTime(mainPlayer.playerInfo.qifu_type - 1));
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, mainPlayer.playerInfo.qifu_type);
				unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, mainPlayer.playerInfo.vip_level);
			}
			unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);

			this._offlineUnit = unitOffline;
		}

		enterMap() {
			//各种判断
			if (this.mapinfo) return false;
			if (!this.maplv) {
				this.maplv = this._last_maplv;
			}
			this._game.network.call_match_game(this._mapid, this.maplv);
			return true;
		}

		leavelMap() {
			//各种判断
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			super.clear();
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.off(DezhouMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this._dezhouMapInfo = null;
			if (this._dezhouMgr) {
				this._dezhouMgr.clear();
				this._dezhouMgr = null;
			}
		}
	}
}