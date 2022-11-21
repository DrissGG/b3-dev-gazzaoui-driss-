class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

// class Triangle {
//     constructor(a,b,c) {
//         this.length0 = a;
//         this.length1 = b;
//         this.length2 = c;
//
//     }
//     getBase () {
//         let base_a = this.a;
//         let base_b = this.b;
//         let base_c = this.c;
//         let maBase;
//
//         if(base_a <= base_b && base_a <= base_c){
//             maBase = base_a;
//         }
//         if (base_b <= base_a && base_b <= base_c){
//             maBase = base_b;
//         }
//         else{
//             maBase = base_c;
//         }
//         return maBase;
//     }
//     getA () {
//         return this.length0;
//     }
//     getB () {
//         return this.length1;
//     }
//     getC () {
//         return this.length2;
//     }
//
//     getPerimetre () {
//         return (this.length0 + this.length1 + this.length2);
//     }
//
//     getHeight () {
//         let  hauteur = ((2/this.length0)*
//             ( Math.sqrt(this.getPerimetre() *
//                     ((this.getPerimetre() - this.length0) *
//                         (this.getPerimetre() - this.length1) *
//                         (this.getPerimetre() - this.length2)))
//             )).toFixed(3);
//
//         return hauteur;
//
//     }
//
//     // getSurfaceArea () {
//     //     return (this.length * this.height) / 2;
//     // }
//
//
// }
class Triangle {
    constructor(base, hauteur) {
        this.base = base;
        this.height = hauteur;
    }



    getBase () {
        return this.base;
    }

    getHeight() {
        return this.height;
    }
    getSurfaceArea () {
       return ((this.base * this.height) / 2);
    }


}
class Isocele{
    constructor(a, b, c) {
        this.A = a;
        this.B = b;
        this.C = c;
    }
    getIsocele () {
        let a = this.a;
        let b = this.b;
        let c = this.c;
        let message = false;
        if (a == b || a == c || c==b){
             message =true;
        }
        else{
            return message;
        }

    }

}

class Cercle{
    constructor(rayon) {
        this.rayon  = rayon;
    }

    getRayon () {
        return this.rayon;
    }
    getPerimetre () {
        return parseFloat((2*Math.PI*this.getRayon()).toFixed(1));
    }

    getAire () {
    return parseFloat( ((Math.PI*Math.pow(this.getRayon(),2)).toFixed(1)) );
    }



}



module.exports = {
    Cube:Cube,
    Triangle:Triangle,
    Isocele:Isocele,
    Cercle: Cercle
}