/**
* 炸金花
*/
module gamedezhou.page {
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
    const MAX_SEATS_COUNT = 9 // 最大座位数
    export class DezhouMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.dezhou.DeZhouUI;
        private _dezhouStory: DezhouStory;
        private _betVal: number = 0;    //拉霸下注数额
        private _dezhouMgr: DezhouMgr;
        private _mapInfo: DezhouMapInfo;
        private _totalTime: number; //操作倒计时总时间
        private _showCards: any = [];   //就明牌用的
        private _battleIndex: number = -1;
        private _winnerPos: any = [];     //胜利方
        private _settleGold: any = [];
        private _endTime: number;   //倒计时时间
        private _publicCard: any = [];
        private _clipList: Array<DezhouClip> = [];//飘字集合
        private _cardType: any = ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦", "金刚", "同花顺", "皇家同花顺"];
        private _mainIdx: number = 0;   //主玩家的座位号
        private _betChipTemp: any = [0, 0, 0, 0, 0, 0, 0, 0, 0];    //累计下注

        private _needChip: any = {
            "192": [50],  //新手
            "193": [100],  //初级
            "194": [500],  //中级
            "195": [1000],  //高级
        };

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._asset = [
                DatingPath.atlas_dating_ui + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                Path_game_dezhou.atlas_game_ui + "dezhou.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                Path_game_dezhou.atlas_game_ui + "dezhou/effect/btn.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.dezhou.DeZhouUI');
            this.addChild(this._viewUI);
            if (!this._dezhouMgr) {
                this._dezhouStory = this._game.sceneObjectMgr.story as DezhouStory;
                this._dezhouMgr = this._dezhouStory.dezhouMgr;
                this._dezhouMgr.on(DezhouMgr.DEAR_CARD_OVER, this, this.onDealCardOver);
            }
            this._game.playMusic(Path.music + "dezhou/bgplay.mp3", 0);
            this._viewUI.btn_menu.left = this._game.isFullScreen ? 25 : 10;
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();

            this.updateViewUI();
            this.onUpdateUnitOffline();
            if (!this._dezhouStory.isReConnected) {
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
            }
            else {
                this.onUpdateMap();
            }

            Laya.stage.on(LEvent.CLICK, this, this.onClickHandle);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
            this._game.sceneObjectMgr.on(DezhouMapInfo.EVENT_STATUS_CHECK, this, this.updateMapInfo);
            this._game.sceneObjectMgr.on(DezhouMapInfo.EVENT_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

            this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_add.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_closen.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_giveup.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_call.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_pass.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_cardtype.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.img_take.on(LEvent.CLICK, this, this.onBtnClickWithTween);
        }

        protected onBtnTweenEnd(e: LEvent, target: any) {
            switch (target) {
                case this._viewUI.btn_menu://菜单
                    this._viewUI.img_menu.visible = true;
                    this._viewUI.btn_menu.visible = false;
                    break;
                case this._viewUI.btn_closen://返回
                    if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                        let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
                        if (!mainUnit.IsGiveUp() && !mainUnit.IsIsDefeated() && this._game.sceneObjectMgr.mapInfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                    }
                    this.clearClips()
                    this.clearListen();
                    // this.close();
                    this._dezhouMgr.clear();
                    this._dezhouStory.clear();
                    this._game.sceneObjectMgr.leaveStory(true);
                    break;
                case this._viewUI.btn_giveup://弃牌
                    this._game.network.call_dezhou_discard();
                    break;
                case this._viewUI.btn_call://跟注
                    this._game.network.call_dezhou_bet();
                    break;
                case this._viewUI.btn_add://加注
                    this._viewUI.add_bet.visible = true;
                    this._viewUI.btn_enter.visible = true;
                    let mainUnit = this._game.sceneObjectMgr.mainUnit;
                    let minValue = this._mapInfo.GetCurChip() - mainUnit.GetCurChip() + 1;
                    let maxValue = EnumToString.getPointBackNum(mainUnit.GetDeZhouMoney() / 100, 2);
                    this._viewUI.hslider_bet.min = minValue;
                    this._viewUI.hslider_bet.max = maxValue;
                    this._viewUI.hslider_bet.value = minValue;
                    this._viewUI.text_bet.text = minValue.toString();
                    break;
                case this._viewUI.btn_enter://确定加注
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.dezhouMoney < this._betVal) {
                        this._game.showTips("金币不足");
                        return;
                    }
                    this._viewUI.add_bet.visible = false;
                    this._game.network.call_dezhou_addbet(this._betVal);
                    break;
                case this._viewUI.btn_pass://过
                    this._game.network.call_dezhou_pass();
                    break;
                case this._viewUI.btn_continue://继续游戏
                    //玩家的钱是否大于设置带入的钱
                    let mainPlayer = this._game.sceneObjectMgr.mainPlayer
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money >= this._needChip[this._dezhouStory.mapLv][0]) {
                        if (mainPlayer.playerInfo.money < mainPlayer.playerInfo.dezhouMoney) {
                            let money = Math.floor(mainPlayer.playerInfo.money);
                            this._game.network.call_dezhou_take_money_to_room(money);
                        }
                        if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                            this.clearClips();
                            this.resetData();
                            this.updateViewUI();
                            // this.clearListen();
                            this._dezhouMgr.clear();
                            this._game.sceneObjectMgr.leaveStory();
                        } else {
                            this.onUpdateMap();
                        }
                    } else {
                        this.onNotEnoughMoney();
                    }
                    break;
                case this._viewUI.btn_rules://规则
                    this._game.uiRoot.general.open(DezhouPageDef.PAGE_DEZHOU_RULE);
                    break;
                case this._viewUI.btn_cardtype://牌型
                    this._game.uiRoot.general.open(DezhouPageDef.PAGE_DEZHOU_RULE, (page: DezhouRulePage) => {
                        page.dataSource = 2;
                    });
                    break;
                case this._viewUI.btn_set://设置
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                    break;
                case this._viewUI.btn_record://战绩
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = DezhouPageDef.GAME_NAME;
                    });
                    break;
                // case this._viewUI.btn_qifu://祈福
                //     this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                //     break;
                case this._viewUI.img_take: //修改带钱
                    let config = ["192", "193", "194", "195"];
                    let val = config.indexOf(this._dezhouStory.mapLv.toString());
                    this._game.uiRoot.general.open(DezhouPageDef.PAGE_DEZHOU_TAKE, (page: DezhouTakePage) => {
                        page.setdata(val);
                    });
                    break;
                default:
                    break;
            }
        }

        //只是为了隐藏菜单
        private onClickHandle(e: LEvent): void {
            if (e.currentTarget != this._viewUI.btn_menu) {
                this._viewUI.img_menu.visible = false;
                this._viewUI.btn_menu.visible = true;
            }
        }

        //下注滚动条
        private onChangeHslider(value: number): void {
            let mainUint = this._game.sceneObjectMgr.mainUnit;
            if (!mainUint) return;
            this._betVal = value;
            let maxValue = EnumToString.getPointBackNum(mainUint.GetDeZhouMoney() / 100, 2);
            if (this._betVal >= maxValue) {
                this._betVal = maxValue;
            }
            this._viewUI.text_bet.text = this._betVal == maxValue ? "allin" : this._betVal.toString();
        }

        private onUnitAdd(u: Unit): void {
            this.onUpdateUnit();
        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
            //离场清除桌上卡牌
            //this._dezhouMgr.clearCardObject(u.GetIndex());
        }

        private onUpdateUnit(qifu_index?: number): void {
            if (!this._mapInfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (mainUnit.GetIndex() == 0) return;
            this._mainIdx = mainUnit.GetIndex();
            let betPos = this._mapInfo.GetCurrentBetPos();
            for (let index = 0; index < MAX_SEATS_COUNT; index++) {
                let posIdx = (this._mainIdx + index) % MAX_SEATS_COUNT == 0 ? MAX_SEATS_COUNT : (this._mainIdx + index) % MAX_SEATS_COUNT;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx)
                this._viewUI["player" + index].visible = unit;
                if (unit) {
                    let name = getMainPlayerName(unit.GetName());
                    let isOperation = this.isOperation(unit);
                    if (!isOperation) {
                        this._viewUI["player" + index].text_name.text = name;
                    }
                    this._viewUI["player" + index].text_money.text = EnumToString.getPointBackNum(unit.GetDeZhouMoney() / 100, 2).toString();
                    //头像框
                    this._viewUI["player" + index].img_txk.visible = unit.GetVipLevel() > 0;
                    if (this._viewUI["player" + index].img_txk.visible) {
                        this._viewUI["player" + index].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        this._viewUI["player" + index].qifu_type.visible = true;
                        this._viewUI["player" + index].qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween(this._viewUI["player" + index].qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (unit.GetQFEndTime(unit.GetQiFuType() - 1) > this._game.sync.serverTimeBys) {
                        if (qifu_index && posIdx == qifu_index) {
                            Laya.timer.once(2500, this, () => {
                                this._viewUI["player" + index].img_qifu.visible = true;
                                if (this._viewUI["player" + index].img_qifu.visible && unit.GetQiFuType()) {
                                    this._viewUI["player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                }
                            })
                        } else {
                            this._viewUI["player" + index].img_qifu.visible = true;
                            if (this._viewUI["player" + index].img_qifu.visible && unit.GetQiFuType()) {
                                this._viewUI["player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                            }
                        }
                    } else {
                        this._viewUI["player" + index].img_qifu.visible = false;
                        this._viewUI["player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                    }
                }
            }
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index: number, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }

        private _nameStrInfo: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
        private _qifuTypeImgUrl: string;
        protected onOptHandler(optcode: number, msg: any) {
            if (msg.type == Operation_Fields.OPRATE_GAME) {
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                        // let dataInfo = JSON.parse(msg.data);
                        // //打开祈福动画界面
                        // this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, (page) => {
                        //     page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        // });
                        // //相对应的玩家精灵做出反应
                        // this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        // this.onUpdateUnit(dataInfo.qifu_index);
                        break;
                }
            }
        }

        //是否有操作过
        private isOperation(unit): boolean {
            let flag: boolean = false;
            if (unit.IsGiveUp()) {
                flag = true;
            } else if (unit.IsPass()) {
                flag = true;
            } else if (unit.IsAllIn()) {
                flag = true;
            } else if (unit.IsBet()) {
                flag = true;
            } else if (unit.IsPinPai()) {
                flag = true;
            }
            return flag;
        }

        //地图监听
        private onUpdateMap(): void {
            let mapInfo = this._game.sceneObjectMgr.mapInfo;
            this._mapInfo = mapInfo as DezhouMapInfo;
            if (mapInfo) {
                this._viewUI.xipai.ani_xipai.on(LEvent.COMPLETE, this, this.onWashCardOver);
                this._viewUI.btn_continue.visible = false;
                if (this._dezhouStory.isReConnected) {
                    this._dezhouStory.mapLv = this._mapInfo.GetMapLevel();
                    this.loginAgainInit();
                }
                this.initView();
                this.updateMapInfo();
                this._mainIdx = 0;
            } else {
                this.onUpdateUnitOffline();
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
            }
        }

        private onUpdateUnitOffline() {
            if (!this._dezhouMgr.unitOffline) return;
            let unitOffline = this._dezhouMgr.unitOffline;
            let mPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (unitOffline) {
                this._viewUI.player0.visible = true;
                let money;
                if (mPlayer && mPlayer.playerInfo) {
                    money = mPlayer.playerInfo.dezhouMoney;
                    this._viewUI.player0.text_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                    this._viewUI.player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mPlayer.playerInfo.headimg + ".png";
                    this._viewUI.player0.img_qifu.visible = mPlayer.GetQiFuEndTime(mPlayer.playerInfo.qifu_type - 1) > this._game.sync.serverTimeBys;
                    if (this._viewUI.player0.img_qifu.visible && mPlayer.playerInfo.qifu_type) {
                        this._viewUI.player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mPlayer.playerInfo.qifu_type - 1] + ".png";
                    }
                    //头像框
                    this._viewUI.player0.img_txk.visible = mPlayer.playerInfo.vip_level > 0;
                    if (this._viewUI.player0.img_txk.visible) {
                        this._viewUI.player0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mPlayer.playerInfo.vip_level + ".png";
                    }
                } else {
                    money = unitOffline.GetDeZhouMoney() / 100;
                    this._viewUI.player0.text_name.text = getMainPlayerName(unitOffline.GetName());
                    this._viewUI.player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitOffline.GetHeadImg() + ".png";
                    this._viewUI.player0.img_qifu.visible = unitOffline.GetQiFuEndTime() > this._game.sync.serverTimeBys;
                    if (this._viewUI.player0.img_qifu.visible && unitOffline.GetQiFuType()) {
                        this._viewUI.player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unitOffline.GetQiFuType() - 1] + ".png";
                    }
                    //头像框
                    this._viewUI.player0.img_txk.visible = unitOffline.GetVipLevel() > 0;
                    if (this._viewUI.player0.img_txk.visible) {
                        this._viewUI.player0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unitOffline.GetVipLevel() + ".png";
                    }
                }
                this._viewUI.player0.text_money.text = EnumToString.getPointBackNum(money, 2).toString();
            }
        }

        //发完牌了
        private onDealCardOver(): void {
            this._viewUI.view_paihe.ani2.stop();
        }

        private updateMapInfo(): void {
            if (!this._mapInfo) return;
            let mainUint = this._game.sceneObjectMgr.mainUnit;
            if (!mainUint) return;
            if (mainUint.GetIndex() == 0) return;
            if (this._mainIdx == 0) {
                this._mainIdx = mainUint.GetIndex();
            }
            this._viewUI.text_money.text = EnumToString.getPointBackNum(this._mapInfo.GetJackpot(), 2).toString();
            this.updateMapUI();
            if (this._mapInfo.GetMapState() > MAP_STATUS.MAP_STATE_SETTLE) {
                this._viewUI.text_money.text = "0";
                for (let index = 1; index < 9; index++) {
                    this._viewUI["img_type" + index].visible = false;
                }
            }
        }

        //根据地图状态刷新界面
        private updateMapUI(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            let betPos = this._mapInfo.GetCurrentBetPos();
            let mangZhuPos = this._mapInfo.GetMangZhuPos();
            let statue = this._mapInfo.GetMapState();
            let maxMoney = mainUnit.GetDeZhouMoney() / 100;
            let max = MAX_SEATS_COUNT;
            this._viewUI.btn_add.visible = false;
            this._viewUI.btn_add.disabled = false;
            this._viewUI.btn_call.visible = false;
            this._viewUI.btn_giveup.visible = false;
            this._viewUI.btn_pass.visible = false;
            this._viewUI.add_bet.visible = false;
            this._viewUI.btn_enter.visible = false;
            this._viewUI.img_take.visible = true;
            for (let index = 0; index < max; index++) {
                this._viewUI["player" + index].img_frame.visible = false;
                this._viewUI["img_guang" + index].visible = false;
                this._viewUI["img_mangzhu" + index].visible = false;
            }
            if (!mainUnit.IsGiveUp()) {
                this._viewUI.btn_continue.visible = false;
            }
            //洗牌
            if (statue == MAP_STATUS.MAP_STATE_WASH_CARD) {
                this._viewUI.xipai.visible = true;
                this._viewUI.xipai.ani_xipai.play(1, false);
            } else {
                this._viewUI.xipai.visible = false;
                this._viewUI.xipai.ani_xipai.stop();
            }
            //发牌
            if (statue == MAP_STATUS.MAP_STATE_DEAR_CARD) {
                this._viewUI.text_info.visible = true;
                this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
                this._viewUI.text_info.visible = true;
                this._viewUI.text_roomtype.visible = true;
                this._viewUI.text_mangzhu.visible = true;
                this._viewUI.view_paihe.ani2.play(0, true);
            }
            //发完牌了
            if (statue > MAP_STATUS.MAP_STATE_DEAR_CARD) {
                if (!mainUnit.IsGiveUp() && this._mainIdx == betPos) {
                    this._viewUI.btn_add.visible = true;
                    this._viewUI.btn_giveup.visible = true;
                    if (mainUnit.GetCurChip() < this._mapInfo.GetCurChip()) {
                        this._viewUI.btn_call.visible = true;
                    } else {
                        this._viewUI.btn_pass.visible = true;
                    }
                    if (mainUnit.GetDeZhouMoney() / 100 + mainUnit.GetCurChip() < this._mapInfo.GetCurChip()) {
                        this._viewUI.btn_add.disabled = true;
                    }
                }
                //显示盲注位置
                if (mangZhuPos && statue < MAP_STATUS.MAP_STATE_SHOW_GAME) {
                    let mangPos = (mangZhuPos - this._mainIdx + max) % max
                    this._viewUI["img_mangzhu" + mangPos].visible = true;
                }
            }
            //开始
            if (statue == MAP_STATUS.MAP_STATE_BEGIN && betPos) {
                let posIdx = (betPos - this._mainIdx + max) % max
                this._viewUI["player" + posIdx].img_frame.visible = true;
                this._viewUI["img_guang" + posIdx].visible = true;
                let now_time = this._game.sync.serverTimeBys * 1000;
                this._endTime = this._mapInfo.GetCountDown() * 1000;
                this._totalTime = this._endTime - now_time;
            }
            //展示
            if (statue == MAP_STATUS.MAP_STATE_SHOW_GAME) {
                Laya.timer.once(500, this, () => {
                    if (this._settleGold.length) {
                        this.addMoneyClip();
                    }
                    this._viewUI.btn_continue.visible = true;
                    this.onNotEnoughMoney();
                });
            }
        }

        //充值弹框
        private onNotEnoughMoney(): void {
            if (!this._game.sceneObjectMgr.mainPlayer) return;
            if (this._game.sceneObjectMgr.mainPlayer.GetMoney() < this._needChip[this._dezhouStory.mapLv][0]) {
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._needChip[this._dezhouStory.mapLv][0]), () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, true, TongyongPageDef.TIPS_SKIN_STR['cz']);
            }
        }

        //德州金币不足
        private onNotEnoughDzMoney(): void {
            let mainPlayer = this._game.sceneObjectMgr.mainPlayer
            if (!mainPlayer) return;
            if (this._game.sceneObjectMgr.mainPlayer.GetMoney() < mainPlayer.playerInfo.dezhouMoney) {
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", mainPlayer.playerInfo.dezhouMoney), () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, true,TongyongPageDef.TIPS_SKIN_STR['cz']);
            }
        }

        //战斗日志
        private updateBattledInfo(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (mainUnit.GetIndex() == 0) return;
            if (this._mainIdx == 0) {
                this._mainIdx = mainUnit.GetIndex();
            }
            let battleInfoMgr = this._mapInfo.battleInfoMgr;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                let index = battleInfoMgr.info.length;
                let posIdx = (battleInfo.SeatIndex - this._mainIdx + MAX_SEATS_COUNT) % MAX_SEATS_COUNT;
                switch (battleInfo.Type) {
                    case 1: {   //过牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let idx = battleInfo.SeatIndex;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                if (!this._dezhouStory.isReConnected) {
                                    this._game.playSound(Path_game_dezhou.music_dezhou + "pass.mp3", false);
                                }
                                this._viewUI["player" + posIdx].text_name.text = "过牌";
                                this._viewUI["player" + posIdx].text_name.color = "#2cf11b";
                            }
                        }
                        break;
                    }
                    case 10: {   //大小盲注
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoStart;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                            if (unit) {
                                this._betChipTemp[posIdx] = this._betChipTemp[posIdx] + info.BetVal;
                                this._viewUI["bet" + posIdx].visible = true;
                                this._viewUI["text_bet" + posIdx].text = EnumToString.getPointBackNum(this._betChipTemp[posIdx], 2).toString();
                            }
                        }
                        break;
                    }
                    case 2: {   //跟注
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBet;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                            if (unit) {
                                if (!this._dezhouStory.isReConnected) {
                                    let type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                    if (info.SeeCard == 1) {
                                        this._game.playSound(Path_game_dezhou.music_dezhou + "allin_" + type + ".mp3", false);
                                    } else {
                                        this._game.playSound(Path_game_dezhou.music_dezhou + "genzhu_" + type + ".mp3", false);
                                    }
                                }
                                if (info.SeeCard == 1) {
                                    this._viewUI["player" + posIdx].text_name.text = "all in";
                                    this._viewUI["player" + posIdx].text_name.color = "#f1351b";
                                } else {
                                    this._viewUI["player" + posIdx].text_name.text = "跟注";
                                    this._viewUI["player" + posIdx].text_name.color = "#e0f11b";
                                }
                                this._betChipTemp[posIdx] = this._betChipTemp[posIdx] + info.BetVal;
                                this._viewUI["bet" + posIdx].visible = true;
                                this._viewUI["text_bet" + posIdx].text = EnumToString.getPointBackNum(this._betChipTemp[posIdx], 2).toString();
                            }
                        }
                        break;
                    }
                    case 24: {   //明牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let cards = [];
                            let showCard = [];
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoShowCards;
                            for (let index = 0; index < info.Cards.length; index++) {
                                let card = info.Cards[index];
                                cards.push(card);
                            }
                            this._dezhouMgr.showCard(cards, info.SeatIndex);
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                            if (unit && unit != mainUnit) {
                                let offset = this._mainIdx
                                let idx = (info.SeatIndex - offset + 9) % 9;
                                this._viewUI["img_type" + idx].visible = true;
                                this._viewUI["text_type" + idx].text = this._cardType[info.CardType];
                            }
                        }
                        break;
                    }
                    case 9: {   //加注
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoAddChip;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                            if (unit) {
                                if (!this._dezhouStory.isReConnected) {
                                    let type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                    if (info.SeeCard == 1) {
                                        this._game.playSound(Path_game_dezhou.music_dezhou + "allin_" + type + ".mp3", false);
                                    } else {
                                        this._game.playSound(Path_game_dezhou.music_dezhou + "jiazhu_" + type + ".mp3", false);
                                    }
                                }
                                let type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                if (info.SeeCard == 1) {
                                    this._viewUI["player" + posIdx].text_name.text = "all in";
                                    this._viewUI["player" + posIdx].text_name.color = "#f1351b";
                                } else {
                                    this._viewUI["player" + posIdx].text_name.text = "加注";
                                    this._viewUI["player" + posIdx].text_name.color = "#1be8f1"
                                }
                                this._betChipTemp[posIdx] = this._betChipTemp[posIdx] + info.BetVal;
                                this._viewUI["bet" + posIdx].visible = true;
                                this._viewUI["text_bet" + posIdx].text = EnumToString.getPointBackNum(this._betChipTemp[posIdx], 2).toString();
                            }
                        }
                        break;
                    }
                    case 11: {   //结算
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
                            this._winnerPos.push(info.SeatIndex)
                            this._settleGold.push(info.SettleVal)
                        }
                        break;
                    }
                    case 19: {   //发公共牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoAsk;
                            let handle = Handler.create(this, this._dezhouMgr.createObj);
                            this._publicCard.push(info.Card)
                            if (!this._dezhouStory.isReConnected) {
                                this._dezhouMgr.addCard(info.Card, handle, info.SeatIndex, this._publicCard.length);
                            }
                        }
                        break;
                    }
                    case 29: {   //牌型
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBrdzCardsZuhe;
                            let offset = this._mainIdx;
                            this._viewUI.img_type0.visible = true;
                            this._viewUI.text_type0.text = this._cardType[info.CardsZuhe[offset - 1]];
                        }
                        break;
                    }
                    case 33: {   //弃牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let idx = battleInfo.SeatIndex;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                if (!this._dezhouStory.isReConnected) {
                                    if (idx == this._mainIdx) {
                                        this.onNotEnoughMoney();
                                        this._viewUI.btn_continue.visible = true;
                                        this._viewUI.btn_giveup.visible = false;
                                        this._viewUI.btn_call.visible = false;
                                        this._viewUI.btn_add.visible = false;
                                        this._viewUI.btn_add.disabled = false;
                                    }
                                    let type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                    this._game.playSound(Path_game_dezhou.music_dezhou + "qipai_" + type + ".mp3", false);
                                }
                                this._dezhouMgr.setDisabled(true, unit);
                                this._viewUI["player" + posIdx].text_name.text = "弃牌";
                                this._viewUI["player" + posIdx].text_name.color = "#ffffff";
                                this._viewUI["player" + posIdx].img_gray.visible = true;
                            }
                        }
                        break;
                    }
                    default:
                        break;
                }
            }
        }

        //金币变化 飘字clip
        private addMoneyClip(): void {
            let max = MAX_SEATS_COUNT;
            let preSkin = PathGameTongyong.ui_tongyong_general + "tu_jia.png";
            for (let i = 0; i < this._winnerPos.length; i++) {
                let valueClip = new DezhouClip(DezhouClip.ADD_MONEY_FONT);
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                valueClip.setText(this._settleGold[i], true, false, preSkin);
                //位置
                let index = (this._winnerPos[i] - this._mainIdx + max) % max;
                valueClip.x = this._viewUI["player" + index].clip_money.x;
                valueClip.y = this._viewUI["player" + index].clip_money.y;
                this._viewUI["player" + index].clip_money.parent.addChild(valueClip);
                this._viewUI["player" + index].clip_money.visible = false;
                this._clipList.push(valueClip);
                Laya.Tween.clearAll(valueClip);
                Laya.Tween.to(valueClip, { y: valueClip.y - 30 }, 1500);
            }
        }

        //清理所有飘字clip
        private clearClips(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy(true);
                }
            }
            this._clipList = [];
        }

        private initView(): void {
            //界面UI
            if (this._dezhouStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_1) {
                this._viewUI.text_roomtype.text = "新手场";
                this._viewUI.text_mangzhu.text = "盲注：1/2";
            } else if (this._dezhouStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_2) {
                this._viewUI.text_roomtype.text = "小资场";
                this._viewUI.text_mangzhu.text = "盲注：4/8";
            } else if (this._dezhouStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_3) {
                this._viewUI.text_roomtype.text = "老板场";
                this._viewUI.text_mangzhu.text = "盲注：20/40";
            } else if (this._dezhouStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_4) {
                this._viewUI.text_roomtype.text = "富豪场";
                this._viewUI.text_mangzhu.text = "盲注：50/100";
            }
        }

        //重连上线的
        private loginAgainInit(): void {
            if (!this._dezhouStory.isReConnected) return;
            this._viewUI.text_info.visible = true;
            this._viewUI.text_roomtype.visible = true;
            let max = MAX_SEATS_COUNT;
            this.onUpdateUnit();
            this._viewUI.text_money.text = EnumToString.getPointBackNum(this._mapInfo.GetJackpot(), 2).toString();
            this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
            //轮到自己操作时重连
            let betPos = this._mapInfo.GetCurrentBetPos();
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            let idx = mainUnit.GetIndex();
            if (idx == 0) return;
            if (idx == betPos) {
                this._viewUI.btn_add.visible = true;
                this._viewUI.btn_giveup.visible = true;
                if (mainUnit.GetCurChip() < this._mapInfo.GetCurChip()) {
                    this._viewUI.btn_call.visible = true;
                } else {
                    this._viewUI.btn_pass.visible = true;
                }
                if (mainUnit.GetDeZhouMoney() / 100 + mainUnit.GetCurChip() < this._mapInfo.GetCurChip()) {
                    this._viewUI.btn_add.disabled = true;
                }
            }
            //牌型
            let battleInfoMgr = this._mapInfo.battleInfoMgr;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                if (battleInfo instanceof gamecomponent.object.BattleInfoBrdzCardsZuhe) {
                    this._viewUI.img_type0.visible = true;
                    this._viewUI.text_type0.text = this._cardType[battleInfo.CardsZuhe[idx - 1]];
                }
            }
            this._dezhouStory.isReConnected = false;
        }

        //操作倒计时
        update(): void {
            let mapinfo: DezhouMapInfo = this._game.sceneObjectMgr.mapInfo as DezhouMapInfo;
            if (!mapinfo) return;
            let mainUint = this._game.sceneObjectMgr.mainUnit;
            if (!mainUint) return;
            if (mainUint.GetIndex() == 0) return;
            let state = mapinfo.GetMapState();
            if (state != MAP_STATUS.MAP_STATE_BEGIN) return;
            let now_time = this._game.sync.serverTimeBys * 1000;
            let remain_time: number = this._endTime - now_time;
            let max = MAX_SEATS_COUNT;
            if (remain_time > 0) {
                let angle = remain_time / this._totalTime * 360;
                angle = 360 - angle;
                for (let i = 0; i < max; i++) {
                    let imgMask = this._viewUI["player" + i].img_mask;
                    imgMask.graphics.clear();
                    imgMask.graphics.drawPie(imgMask.width / 2, imgMask.height / 2, 200, angle - 90, 360 - 90, "");
                }
            }
        }

        //洗牌之后
        private onWashCardOver(): void {
            Laya.Tween.to(this._viewUI.xipai, { x: 780, y: 190, alpha: 0.05, rotation: -56, scaleX: 0.3, scaleY: 0.3 }, 500, null, Handler.create(this, () => {
                this._viewUI.view_paihe.cards.visible = true;
                this._viewUI.view_paihe.ani_chupai.play(0, false);
                this._viewUI.xipai.visible = false;
            }));
        }

        //初始化UI
        private updateViewUI(): void {
            let max = MAX_SEATS_COUNT
            for (let i = 0; i < max; i++) {
                this._viewUI["player" + i].img_frame.visible = false;
                this._viewUI["player" + i].visible = false;
                this._viewUI["player" + i].img_gray.visible = false;
                this._viewUI["player" + i].clip_money.visible = false;
                this._viewUI["player" + i].text_name.color = WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_DAZHONGQP ? "#12093d" : "#efda8b";
                this._viewUI["bet" + i].visible = false;
                this._viewUI["img_guang" + i].visible = false;
                this._viewUI["img_mangzhu" + i].visible = false;
            }
            //牌型
            for (let i = 1; i < max; i++) {
                this._viewUI["img_type" + i].visible = false;
            }
            this._viewUI.img_type0.visible = false;
            this._viewUI.text_money.text = "0";
            this._viewUI.btn_giveup.visible = false;
            this._viewUI.btn_call.visible = false;
            this._viewUI.btn_add.visible = false;
            this._viewUI.btn_add.disabled = false;
            this._viewUI.btn_pass.visible = false;
            this._viewUI.btn_enter.visible = false;
            this._viewUI.btn_continue.visible = false;
            this._viewUI.img_menu.visible = false;
            this._viewUI.text_info.visible = false;
            this._viewUI.text_roomtype.visible = false;
            this._viewUI.text_mangzhu.visible = false;
            this._viewUI.view_paihe.ani2.stop();
            this._viewUI.view_paihe.cards.visible = false;
            this._viewUI.xipai.visible = false;
            this._viewUI.add_bet.visible = false;
            this._viewUI.hslider_bet.showLabel = false;
            this._viewUI.hslider_bet.changeHandler = new Handler(this, this.onChangeHslider);//设置位置变化处理器。
            this._viewUI.img_take.visible = false;
        }

        private resetData(): void {
            this._winnerPos = [];
            this._settleGold = [];
            this._showCards = [];
            this._battleIndex = -1;
            this._viewUI.xipai.scale(1, 1);
            this._viewUI.xipai.x = 480;
            this._viewUI.xipai.y = 200;
            this._viewUI.xipai.rotation = 0;
            this._viewUI.xipai.alpha = 1;
            this._publicCard = [];
            this._dezhouMgr.isDealCard = false;
            this._betChipTemp = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        }

        private clearListen() {
            this._viewUI.xipai.ani_xipai.off(LEvent.COMPLETE, this, this.onWashCardOver);
            this._game.sceneObjectMgr.off(DezhouMapInfo.EVENT_STATUS_CHECK, this, this.updateMapInfo);
            this._game.sceneObjectMgr.off(DezhouMapInfo.EVENT_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_add.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_closen.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_giveup.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_call.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_pass.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardtype.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.xipai.ani_xipai.off(LEvent.COMPLETE, this, this.onWashCardOver);
                this._viewUI.img_take.off(LEvent.CLICK, this, this.onBtnClickWithTween);

                this._game.sceneObjectMgr.off(DezhouMapInfo.EVENT_STATUS_CHECK, this, this.updateMapInfo);
                this._game.sceneObjectMgr.off(DezhouMapInfo.EVENT_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);

                if (this._dezhouMgr) {
                    this._dezhouMgr.off(DezhouMgr.DEAR_CARD_OVER, this, this.onDealCardOver);
                }
                this._mapInfo = null;
                this.clearClips();
                this.clearListen();
                this._game.stopMusic();
                this._game.stopAllSound();
            }
            super.close();
        }
    }
}