export default class NumberObject {
    
    constructor(wholeNum=0, topNum=0, bottomNum=0){
        this.wholeNumber = wholeNum
        this.numerator = topNum
        this.denominator = bottomNum

        if(wholeNum%1 !== 0){
            const fraction = this.generateFraction(wholeNum)

            this.wholeNumber = fraction.wholeNumber
            this.numerator = fraction.numerator
            this.denominator = fraction.denominator
        }
    }

    generateFraction(num){
        const wholeNum = Math.floor(num)
        let topNum = num%1
        let bNum = 0

        //2,4,8,16,32
        if(topNum > 0){
            for(let i = 2;i <= 32;i *= 2){
                let check = i*topNum
                if(check%1===0){
                    bNum = i
                    topNum *= i
                    break
                }
            }
        }

        return {wholeNumber: wholeNum, numerator: topNum, denominator: bNum}
    }

    
}