/**
* name 
*/
module gamedezhou.data {
	export class DezhouMapInfo extends gamecomponent.object.MapInfoT<DezhouData> {
		//地图状态变更
		static EVENT_STATUS_CHECK: string = "DezhouMapInfo.EVENT_STATUS_CHECK";
		//战斗体更新
		static EVENT_BATTLE_CHECK: string = "DezhouMapInfo.EVENT_BATTLE_CHECK";
		//继续游戏状态
		static EVENT_STATUS_CONTINUE: string = "DezhouMapInfo.EVENT_STATUS_CONTINUE";
		//牌局号
		static EVENT_GAME_NO: string = "DezhouMapInfo.EVENT_GAME_NO";
		//倒计时时间戳更新
		static EVENT_COUNT_DOWN: string = "DezhouMapInfo.EVENT_COUNT_DOWN";

		constructor(v: SceneObjectMgr) {
			super(v, () => { return new DezhouData() });

		}

		//当对象更新发生时
		protected onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
				this._sceneObjectMgr.event(DezhouMapInfo.EVENT_STATUS_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
				this._battleInfoMgr.OnUpdate();
				this._sceneObjectMgr.event(DezhouMapInfo.EVENT_BATTLE_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE1)) {
				this._sceneObjectMgr.event(DezhouMapInfo.EVENT_STATUS_CONTINUE);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
				this._sceneObjectMgr.event(DezhouMapInfo.EVENT_COUNT_DOWN);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
				this._sceneObjectMgr.event(DezhouMapInfo.EVENT_GAME_NO);
			}
		}

		private cardType: string[] = ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦", "金刚", "同花顺", "皇家同花顺"];

		public getBattleInfoToString(): string {
			let str: string = "";
			let count = 1;
			let round = 0;
			for (let i = 0; i < this._battleInfoMgr.info.length; i++) {
				let battleInfo = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo.Type == 1) {
					//过牌
					let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPass;
					let newString = name + "：" + "过牌";
					str = str + "#" + newString;
				} else if (battleInfo.Type == 2) {
					//跟注
					let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBet;
					let newString = name + "：" + "跟注" + info.BetVal;
					str = str + "#" + newString;
				} else if (battleInfo.Type == 9) {
					//加注
					let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoAddChip;
					let newString = name + "：" + "加注" + info.BetVal;
					str = str + "#" + newString;
				} else if (battleInfo.Type == 10) {
					//大小盲注
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoStart;
					let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
					let newString = name + "：" + "小盲注下注" + info.BetVal;
					if (count % 2 == 0) {
						newString = name + "：" + "大盲注下注" + info.BetVal;
					}
					if (!str) {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
					count++;
				} else if (battleInfo.Type == 11) {
					//结算
					let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
					let newString = name + "盈利：" + info.SettleVal;
					str = str + "#" + newString;
				} else if (battleInfo.Type == 24) {
					//开牌
					let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoShowCards;
					let newString = name + "：" + "开牌，牌型是：" + this.cardType[info.CardType];
					str = str + "#" + newString;	
				} else if (battleInfo.Type == 33) {
					//弃牌
					let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoDisCard;
					let newString = name + "：" + "弃牌";
					str = str + "#" + newString;
				}
			}
			return str;
		}

		//通过座位取玩家名字
		private GetPlayerNameFromSeat(index: number): string {
			let name: string;
			let users = this._battleInfoMgr.users;
			name = users[index - 1].name;
			return name
		}
	}
}