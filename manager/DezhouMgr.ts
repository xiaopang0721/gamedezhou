/**
* name 
*/
module gamedezhou.manager {
	const MIN_CHECKTIME: number = 1000;//最小检测时间间隔(毫秒)
	export class DezhouMgr extends gamecomponent.managers.PlayingCardMgrBase<DezhouData>{
		private _offsetTime: number//剩余检测时间(毫秒)
		private _unitOffline: UnitOffline;//假精灵信息
		private _isDealCard: boolean = false;
		private _pubCards: any = [];
		private _startNum: number = 0;
		static readonly DEAR_CARD_OVER: string = "DezhouMgr.DEAR_CARD_OVER";
		static readonly MAPINFO_OFFLINE: string = "DezhouMgr.MAPINFO_OFFLINE";//假精灵

		constructor(game: Game) {
			super(game);
		}

		get unitOffline() {
			return this._unitOffline;
		}

		set unitOffline(v) {
			this._unitOffline = v;
			this.event(DezhouMgr.MAPINFO_OFFLINE)
		}

		get isDealCard() {
			return this._isDealCard;
		}

		set isDealCard(v) {
			this._isDealCard = v;
		}

		//初始化牌
		Init(all_val: Array<number>, create_fun: Handler): void {
			this._cards.length = 0;
			for (let i: number = 0; i < all_val.length; i++) {
				let card: DezhouData;
				card = create_fun.run();
				card.Init(all_val[i]);
				card.index = i;
				this._cards.push(card)
			}
			create_fun.recover();
			create_fun = null;
		}

		//心跳更新
		update(diff: number) {
			if (this._offsetTime > 0) {
				this._offsetTime -= diff;
				return;
			}
			this._offsetTime = MIN_CHECKTIME;
		}

		//加公共牌
		addCard(val: number, create_fun: Handler, ownerIdx: number, cardIdx: number): void {
			let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
			let card: DezhouData;
			card = create_fun.run();
			this._cards.push(card)
			card.Init(val);
			card.index = cardIdx - 1;
			card.sortScore = -cardIdx;
			card.scaleX = 1;
			card.isShow = true;
			card.myOwner(null, false, ownerIdx, cardIdx);
			this._pubCards.push(card);
			this.fapaiPub();
		}

		//发公共牌
		fapaiPub() {
			for (let i = this._startNum; i < this._pubCards.length; i++) {
				let card = this._pubCards[i];
				if (card) {
					Laya.timer.once(100 * this._startNum, this, () => {
						this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
						card.fapai();
					});
					this._startNum++;
				}
			}
		}

		createObj(u: Unit) {
			let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, DezhouData) as DezhouData;
			card.pos = new Vector2(782, 185);
			card.rotateAngle = 65;
			return card;
		}

		sort() {
			let allcards = this._cards;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			let idx = mainUnit.GetIndex();
			let max = 9;
			let count = 0;
			let length = allcards.length
			for (let index = 0; index < max; index++) {
				let posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
				let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
				if (unit) {
					for (let i = 0; i < 2; i++) {
						let card = allcards[count * 2 + i] as DezhouData;
						if (card) {
							if (unit == mainUnit) {
								let val = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
								card.Init(val[i])
							}
							card.myOwner(unit, mainUnit == unit, idx, posIdx);
							card.index = i;
							card.sortScore = -i;
						}
					}
					count++;
				}
			}
			//有发公共牌
			if (length > 2 * count) {
				for (let i = count * 2; i < length; i++) {
					let card = allcards[i] as DezhouData;
					let cardIdx = i - count * 2 + 1
					if (card) {
						card.index = cardIdx - 1;
						card.sortScore = -cardIdx;
						card.scaleX = 1;
						card.isShow = true;
						card.myOwner(null, false, 10, cardIdx);
						this._startNum++;
					}
				}
			}
		}

		//发牌
		fapai() {
			let count = 0;
			let counter = 0;
			let allcards = this._cards;
			for (let index = 0; index < 2; index++) {
				for (let i = 0; i < allcards.length / 2; i++) {
					let card = allcards[index + i * 2];
					Laya.timer.once(100 * count, this, () => {
						this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
						card.fapai();
						counter++;
						if (counter >= allcards.length) {
							this.event(DezhouMgr.DEAR_CARD_OVER);
						}
					});
					count++;
				}
			}
		}

		//重连发牌
		refapai() {
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				card.refapai();
			}
		}

		//明牌
		showCard(v: any, pos: number): void {
			let length = this._cards.length
			if (length % 2 == 1) {
				length = length - 5
			}
			for (let i = 0; i < length; i++) {
				let card = this._cards[i];
				card.sortScore = 2 - i;
				if (card.owner && card._ownerIdx == pos) {
					let index = i % 2;
					card.Init(v[index]);
					card.fanpaiall();
				}
			}
		}

		//牌置灰
		setDisabled(show: boolean, unit: Unit): void {
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (card.owner == unit) {
					card.disable = show;
				}
			}
		}

		// 清理指定玩家卡牌对象
		clearCardObject(index: number): void {
			this._game.sceneObjectMgr.ForEachObject((obj: any) => {
				if (obj instanceof DezhouData) {
					if (obj.owner && obj.owner.GetIndex() == index) {
						this._game.sceneObjectMgr.clearOfflineObject(obj);
					}
				}
			})
		}
	}
}