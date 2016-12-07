class Equipment {    //装备
	level: number;
	basicattack: number;
	jewels: Jewel[] = []; //宝石
	constructor(level: number, basicattack: number) {
		this.level = level;
		this.basicattack = basicattack;
	}

	get jewelsattack() {                //得到装备攻击力
		var result = 0;
		this.jewels.forEach(e => result += e.attack);
		// console.log("jewel:" + result);
		return result;
	}

	get attack() {
		return this.basicattack * Math.pow(1.05 , this.level) + this.jewelsattack;
	}
	Addjewel(jewel: Jewel) {
		this.jewels.push(jewel);
	}
}