/**
* name
*/
module gamedezhou.page {
	export class DezhouPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.dezhou.DeZhou_HUDUI;
		private _player: any;
		private _leastTmep: any = ["1/2", "5/10", "20/40", "50/100"];
		private _needMoney: any = [50, 100, 500, 1000];
		private _difenClipList: DezhouClip[] = [];
		private _leastClipList: DezhouClip[] = [];
		private _dezhouMgr: DezhouMgr;
		private _mapLvConfig = [192, 193, 194, 195];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_dezhou.atlas_game_ui + "dezhou.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				Path_game_dezhou.ui_dezhou + "sk/depk_3.png",
				Path_game_dezhou.ui_dezhou + "sk/dzpk_0.png",
				Path_game_dezhou.ui_dezhou + "sk/dzpk_1.png",
				Path_game_dezhou.ui_dezhou + "sk/dzpk_2.png",

			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.dezhou.DeZhou_HUDUI', ["game_ui.tongyong.HudUI"]);
			this.addChild(this._viewUI);
			this._game.playMusic(Path.music + "dezhou/bgplay.mp3", 0);
			this._dezhouMgr = new DezhouMgr(this._game);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
			for (let index = 0; index < 4; index++) {
				if (!this._difenClipList[index]) {
					this._difenClipList[index] = new DezhouClip(DezhouClip.HUD_FONT);
					this._difenClipList[index].x = this._viewUI["txt_difen" + index].x;
					this._difenClipList[index].y = this._viewUI["txt_difen" + index].y;
					this._viewUI["txt_difen" + index].parent && this._viewUI["txt_difen" + index].parent.addChild(this._difenClipList[index]);
					this._viewUI["txt_difen" + index].removeSelf();
				}
				if (!this._leastClipList[index]) {
					this._leastClipList[index] = new DezhouClip(DezhouClip.HUD_FONT);
					this._leastClipList[index].x = this._viewUI["txt_least" + index].x;
					this._leastClipList[index].y = this._viewUI["txt_least" + index].y;
					this._leastClipList[index].scale(0.8, 0.8);
					this._viewUI["txt_least" + index].parent && this._viewUI["txt_least" + index].parent.addChild(this._leastClipList[index]);
					this._viewUI["txt_least" + index].removeSelf();
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this.initPlayerInfo()
			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			(this._viewUI.view_hud as TongyongHudPage).onOpen(this._game, DezhouPageDef.GAME_NAME, false);
			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					right: -300
				}, 200 + index * 100, Laya.Ease.linearNone);
			}
		}

		protected onBtnTweenEnd(e: LEvent, target: any): void {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			switch (target) {
				case this._viewUI.img_room0:
					if (this._player.playerInfo.money < this._needMoney[0]) {
						this.showTipsBox(this._needMoney[0]);
						return;
					}
					this._game.uiRoot.HUD.open(DezhouPageDef.PAGE_DEZHOU_TAKE, (page) => { page.dataSource = 0; })
					break;
				case this._viewUI.img_room1:
					if (this._player.playerInfo.money < this._needMoney[1]) {
						this.showTipsBox(this._needMoney[1]);
						return;
					}
					this._game.uiRoot.HUD.open(DezhouPageDef.PAGE_DEZHOU_TAKE, (page) => { page.dataSource = 1; })
					break;
				case this._viewUI.img_room2:
					if (this._player.playerInfo.money < this._needMoney[2]) {
						this.showTipsBox(this._needMoney[2]);
						return;
					}
					this._game.uiRoot.HUD.open(DezhouPageDef.PAGE_DEZHOU_TAKE, (page) => { page.dataSource = 2; })
					break;
				case this._viewUI.img_room3:
					if (this._player.playerInfo.money < this._needMoney[3]) {
						this.showTipsBox(this._needMoney[3]);
						return;
					}
					this._game.uiRoot.HUD.open(DezhouPageDef.PAGE_DEZHOU_TAKE, (page) => { page.dataSource = 3; })
					break;
				// case this._viewUI.btn_join:
				// 	let maplv = TongyongUtil.getJoinMapLv(DezhouPageDef.GAME_NAME, this._player.playerInfo.money);
				// 	if (!maplv) return;
				// 	this._game.uiRoot.HUD.open(DezhouPageDef.PAGE_DEZHOU_TAKE, (page) => { page.dataSource = this._mapLvConfig.indexOf(maplv); })
				// 	break;
				default:
					break;
			}
		}

		private initPlayerInfo(): void {
			for (let index = 0; index < this._difenClipList.length; index++) {
				this._difenClipList[index] && this._difenClipList[index].setText(this._leastTmep[index], true);
			}
			for (let index = 0; index < this._leastClipList.length; index++) {
				this._leastClipList[index] && this._leastClipList[index].setText(this._needMoney[index], true);
			}
		}

		private showTipsBox(limit: number) {
			TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), () => {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
			}, true, TongyongPageDef.TIPS_SKIN_STR['cz']);
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_join.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._game.stopMusic();
			}

			super.close();
		}
	}
}