/**
* name 
*/
module gamedezhou.page {
	export class DezhouPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		static PAGE_DEZHOU: string = "1";
		static PAGE_DEZHOU_MAP: string = "2";
		static PAGE_DEZHOU_RULE: string = "101";
		static PAGE_DEZHOU_TAKE: string = "8";


		static myinit(str: string) {
			super.myinit(str);
			DezhouClip.init();
			PageDef._pageClassMap[DezhouPageDef.PAGE_DEZHOU] = DezhouPage;
			PageDef._pageClassMap[DezhouPageDef.PAGE_DEZHOU_MAP] = DezhouMapPage;
			PageDef._pageClassMap[DezhouPageDef.PAGE_DEZHOU_RULE] = DezhouRulePage;
			PageDef._pageClassMap[DezhouPageDef.PAGE_DEZHOU_TAKE] = DezhouTakePage;

			this["__needLoadAsset"] = [
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				Path_game_dezhou.atlas_game_ui + "dezhou.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
				Path_game_dezhou.atlas_game_ui + "dezhou/effect/btn.atlas",
				Path.custom_atlas_scene + 'card.atlas',
				Path.custom_atlas_scene + 'chip.atlas',
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.ui_tongyong_sk + "HeGuan2.sk",
				PathGameTongyong.ui_tongyong_sk + "HeGuan2.png",
				Path_game_dezhou.ui_dezhou + "sk/depk_3.png",
				Path_game_dezhou.ui_dezhou + "sk/dzpk_0.png",
				Path_game_dezhou.ui_dezhou + "sk/dzpk_1.png",
				Path_game_dezhou.ui_dezhou + "sk/dzpk_2.png",


				Path.map + 'pz_dezhou.png',
				Path.map_far + 'bg_dezhou.jpg'
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_dezhou.music_dezhou + "allin_1.mp3",
					Path_game_dezhou.music_dezhou + "allin_2.mp3",
					Path_game_dezhou.music_dezhou + "genzhu_1.mp3",
					Path_game_dezhou.music_dezhou + "genzhu_2.mp3",
					Path_game_dezhou.music_dezhou + "jiazhu_1.mp3",
					Path_game_dezhou.music_dezhou + "jiazhu_2.mp3",
					Path_game_dezhou.music_dezhou + "pass.mp3",
					Path_game_dezhou.music_dezhou + "qipai_1.mp3",
					Path_game_dezhou.music_dezhou + "qipai_2.mp3",
					Path_game_dezhou.music_dezhou + "bgplay.mp3",
				])
			}

			this["__qifulimit"] = true;
		}
	}
}