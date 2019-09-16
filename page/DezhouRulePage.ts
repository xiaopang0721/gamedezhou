/**
* name
*/
module gamedezhou.page {
	export class DezhouRulePage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.dezhou.DeZhou_GuiZeUI;
		static readonly TYPE_WANFA_JIESHAO: number = 0;
		static readonly TYPE_CARD_TYPE: number = 1;
		static readonly TYPE_SETTLEMENT: number = 2;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_dezhou.atlas_game_ui + "dezhou.atlas",
				PathGameTongyong.atlas_game_ui_tongyong+ "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.dezhou.DeZhou_GuiZeUI');
			this.addChild(this._viewUI);
			
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			if (this.dataSource) {
				this._viewUI.btn_tab.selectedIndex = this.dataSource;
			}
			else {
				this._viewUI.btn_tab.selectedIndex = DezhouRulePage.TYPE_WANFA_JIESHAO;
			}
			this._viewUI.panal_wanfa.vScrollBarSkin = "";
			this._viewUI.panal_wanfa.vScrollBar.autoHide = true;
			this._viewUI.panal_wanfa.vScrollBar.elasticDistance = 100;

			this._viewUI.panal_jiesuan.vScrollBarSkin = "";
			this._viewUI.panal_jiesuan.vScrollBar.autoHide = true;
			this._viewUI.panal_jiesuan.vScrollBar.elasticDistance = 100;

			this._viewUI.panal_settle.vScrollBarSkin = "";
			this._viewUI.panal_settle.vScrollBar.autoHide = true;
			this._viewUI.panal_settle.vScrollBar.elasticDistance = 100;
		}

		private selectHandler(index:number): void {
			this._viewUI.panal_wanfa.visible = this._viewUI.btn_tab.selectedIndex == DezhouRulePage.TYPE_WANFA_JIESHAO;
			this._viewUI.panal_jiesuan.visible = this._viewUI.btn_tab.selectedIndex == DezhouRulePage.TYPE_CARD_TYPE;
			this._viewUI.panal_settle.visible = this._viewUI.btn_tab.selectedIndex == DezhouRulePage.TYPE_SETTLEMENT;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_tab.selectedIndex = -1;
			}
			super.close();
		}
	}
}