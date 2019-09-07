/**
* name 
*/
module gamedezhou.data {
	export class DezhouData extends gamecomponent.object.PlayingPuKeCard {
		constructor() {
			super();
		}

		private _b: boolean;
		private max: number = 9;
		//发牌位置
		private _posTemp = [[653, 554, 685, 558], [349, 535, 361, 536], [146, 453, 158, 454], [148, 247, 160, 248],
		[343, 133, 355, 134], [918, 133, 930, 134], [1119, 247, 1131, 248], [1119, 453, 1131, 454], [916, 535, 928, 536],];
		//公共牌
		private _publicList = [438, 320, 95];
		//开牌后位置
		private _openPosTemp = [[654, 564, 22], [370, 560, 22], [167, 472, 22], [167, 277, 22], [362, 160, 22],
		[885, 160, 22], [1087, 277, 22], [1087, 472, 22], [883, 560, 22]]

		private _mainPlayerIndex: number;
		public _ownerIdx;	//牌的归属座位
		myOwner(v: Unit, b: boolean, index: number, seat: number) {
			this.owner = v;
			this._b = b;
			this.size = 0.2;
			this._mainPlayerIndex = index;
			this._ownerIdx = seat;
		}

		fapai() {
			let posX;
			let posY;
			let size;
			let rotateAngle;
			let addTIME
			if (!this.owner) {
				posX = this._publicList[0] + this.index * this._publicList[2];
				posY = this._publicList[1];
				rotateAngle = Math.PI * 4;
				size = 0.8;
			} else {
				let idx = this.owner.GetIndex();
				let posIdx = (idx - this._mainPlayerIndex + this.max) % this.max;
				posX = this._posTemp[posIdx][0];
				posY = this._posTemp[posIdx][1];
				rotateAngle = Math.PI * 4 - Math.PI / 16;
				if (this.index == 1) {
					posX = this._posTemp[posIdx][2];
					posY = this._posTemp[posIdx][3];
					rotateAngle = Math.PI * 4 + Math.PI / 16;
				}
				size = this._b ? 0.8 : 0.3;
			}
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			if (this._b) super.fanpai();
			this.time_interval = 400;
			if (!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
			Laya.Tween.to(this, { size: size, rotateAngle: rotateAngle }, this.time_interval);
		}

		//重连发牌
		refapai() {
			let posX;
			let posY;
			if (!this.owner) {
				posX = this._publicList[0] + this.index * this._publicList[2];
				posY = this._publicList[1];
				this.rotateAngle = Math.PI * 4;
				this.size = 0.8;
			} else {
				let idx = this.owner.GetIndex();
				let posIdx = (idx - this._mainPlayerIndex + this.max) % this.max;
				posX = this._posTemp[posIdx][0];
				posY = this._posTemp[posIdx][1];
				this.rotateAngle = Math.PI * 4 - Math.PI / 16;
				if (this.index == 1) {
					posX = this._posTemp[posIdx][2];
					posY = this._posTemp[posIdx][3];
					this.rotateAngle = Math.PI * 4 + Math.PI / 16;
				}
				this.size = this._b ? 0.8 : 0.3;
			}
			this.pos.y = posY;
			this.pos.x = posX;
			if (this._b) super.fanpai();
			super.fapai();
		}

		fanpai() {
			if (!this._b) return;
			super.fanpai();
		}

		fanpaiall() {
			if (this.owner) {
				let idx = this.owner.GetIndex();
				let posIdx = (idx - this._mainPlayerIndex + this.max) % this.max;
				let posX = this._openPosTemp[posIdx][0] + this.index * this._openPosTemp[posIdx][2];
				let posY = this._openPosTemp[posIdx][1];
				if (!this.targe_pos) {
					this.targe_pos = new Vector2();
				}
				this.isFinalPos = false;
				this.targe_pos.x = posX;
				this.targe_pos.y = posY;
				let size: number;
				if (idx != this._mainPlayerIndex) {
					size = 0.6;
				} else {
					size = 0.8;
				}
				let rotateAngle = Math.PI * 4;
				this.time_interval = 400;
				if (!this.pos) return;
				Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
				Laya.Tween.to(this, { size: size, rotateAngle: rotateAngle }, this.time_interval);
				if (this.isShow) return;
				if (this.owner.IsGiveUp()) return;
				super.fanpai();
			}
		}
	}
}