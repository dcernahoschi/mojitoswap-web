import Decimal from 'decimal.js';
import { to18DecPlaces } from './utils';

//smallest scrypto decimal: 0.000000000000000001 (10 ^ -18) -> smallest tick: -828972, but effectively for us smallest price is 0.00000000000001985 with min tick -631042
//as we can't have enough precision under this values: e.g. for tick -631043 the price would be 0.000000000000019849 as we don't have enough decimal places to represent it
//we stop for now at decimal: 170141183460469231731.687303715884105727 (2^127 - 1) * 10 ^ -18 -> largest tick: 931709 -> real max 170134484377190040957.155711420855095752, but this limit can be increased
export const MIN_TICK: number = -631042;
export const MAX_TICK: number = 931709;

Decimal.set({precision: 90})


// √1.0001^(2^0)=1.000049998750062496 09402341699379869721549895065686478843687006584219196992277770622933351
// √1.0001^(2^1)=1.000100000000000000 00000000000000000000000000000000000000000000000000000000000000000000001
// √1.0001^(2^2)=1.000200010000000000 00000000000000000000000000000000000000000000000000000000000000000000002
// √1.0001^(2^3)=1.000400060004000100 00000000000000000000000000000000000000000000000000000000000000000000003
// √1.0001^(2^4)=1.000800280056007000 56002800080001000000000000000000000000000000000000000000000000000000007
// √1.0001^(2^5)=1.001601200560182043 68800914412871144080084368182005600120001600010000000000000000000000014
// √1.0001^(2^6)=1.003204964963598014 66652869081105525251447062758207492178283369669867033961805743093150478
// √1.0001^(2^7)=1.006420201727613920 1565339084094192727249471076537898545137322718102690161316014449689279
// √1.0001^(2^8)=1.012881622445451097 07809563193500557094413007998241580287614615889620151091258856135110446
// √1.0001^(2^9)=1.025929181087729343 65870860857896586139266494986683410144600571964751188537684401049053695
// √1.0001^(2^10)=1.052530684607338948 38658937037292383636312325114342671727080172351077649340609079679994868
// √1.0001^(2^11)=1.107820842039993613 89921581107881398830436357801172993440767826722660498388694156265457058
// √1.0001^(2^12)=1.227267018058200482 05050381509080882988155989572276645975354795547638857362349763237034557
// √1.0001^(2^13)=1.506184333613467388 1079559811991517204784211435007932829278329104916503953262846717489297
// √1.0001^(2^14)=2.268591246822644826 92560985934360724017128230326555708991371915678505061543426982501261615
// √1.0001^(2^15)=5.146506245160322222 5379917515038639824535472638861019154872486694681907152789589593435245
// √1.0001^(2^16)=26.486526531474198664 0338118127857696049824805871766117054055686687233471819540213817951429
// √1.0001^(2^17)=701.536087702486644953 017488493794435252145727093364428644445068589995588542008803503673612
// √1.0001^(2^18)=492152.882348911033633683 861778354995017201212145027429910534398879860553287927605316254532
// √1.0001^(2^19)=242214459604.341065650571799093 539783052207785644789677143900495224670666767746726190811278

//0.00000000000001985
export const MIN_PRICE: Decimal = new Decimal("0.00000000000001985");

//1.000049998750062496 = √1.0001^(2^0)
const PRICE_0X1: Decimal = new Decimal("1.000049998750062496");
//1.00004999875006249609402341699379869721549895065686478843687006584219196992277770622933351

//1.0001 = √1.0001^(2^1)
const PRICE_0X2: Decimal = new Decimal("1.0001");

//1.00020001 = √1.0001^(2^2)
const PRICE_0X4: Decimal = new Decimal("1.00020001");

//1.000400060004000093 = √1.0001^(2^3)
const PRICE_0X8: Decimal = new Decimal("1.0004000600040001");

//1.000800280056006986 = √1.0001^(2^4)
const PRICE_0X10: Decimal = new Decimal("1.000800280056007");

//1.001601200560182014 = √1.0001^(2^5)
const PRICE_0X20: Decimal = new Decimal("1.001601200560182044");

//1.003204964963597955 = √1.0001^(2^6)
const PRICE_0X40: Decimal = new Decimal("1.003204964963598015");

//1.006420201727613800 = √1.0001^(2^7)
const PRICE_0X80: Decimal = new Decimal("1.00642020172761392");

//1.012881622445450855 = √1.0001^(2^8)
const PRICE_0X100: Decimal = new Decimal("1.012881622445451097");

//1.025929181087728853 = √1.0001^(2^9)
const PRICE_0X200: Decimal = new Decimal("1.025929181087729344");

//1.052530684607337941 = √1.0001^(2^10)
const PRICE_0X400: Decimal = new Decimal("1.052530684607338948");

//1.107820842039991493 = √1.0001^(2^11)
const PRICE_0X800: Decimal = new Decimal("1.107820842039993614");

//1.227267018058195782 = √1.0001^(2^12)
const PRICE_0X1000: Decimal = new Decimal("1.227267018058200482");

//1.506184333613455851 = √1.0001^(2^13)
const PRICE_0X2000: Decimal = new Decimal("1.506184333613467388");

//2.268591246822610072 = √1.0001^(2^14)
const PRICE_0X4000: Decimal = new Decimal("2.268591246822644827");

//5.146506245160164533 = √1.0001^(2^15)
const PRICE_0X8000: Decimal = new Decimal("5.146506245160322223");

//26.486526531472575563 = √1.0001^(2^16)
const PRICE_0X10000: Decimal = new Decimal("26.486526531474198664");

//701.536087702400664335 = √1.0001^(2^17)
const PRICE_0X20000: Decimal = new Decimal("701.536087702486644953");

//492152.882348790396620919 = √1.0001^(2^18)
const PRICE_0X40000: Decimal = new Decimal("492152.882348911033633684");

//242214459604.222321943471435452 = √1.0001^(2^19)
const PRICE_0X80000: Decimal = new Decimal("242214459604.341065650571799094");

export const MAX_PRICE: Decimal = new Decimal("170134484377338262626.059296303521085811");

/** 
 * By definition, sqrt_price = sqrt(1.0001) ^ tick, but tick is always a sum of powers of 2, e.g. 7 = 2^0 + 2^1 + 2^2,
 * So, sqrt_price = sqrt(1.0001) ^ (2 ^ a + 2 ^ b + ...) = sqrt(1.0001) ^ (2 ^ a) * sqrt(1.0001) ^ (2 ^ b) * ...
 * Where  a,b,... are uniques values in interval [0, 19], given the max tick value of 931709.
 * 
 * So, the algorithm bellow decompose the given tick in a power of 2 sum, and for each power of 2, it multiplies 
 * the sqrt_price with the corresponding pre-computed sqrt_price from the constants above. This is the sqrt_price we are looking for.
 */
export const sqrtPriceAtTick: (tick: number) => Decimal =
    tick => {
        if (tick < MIN_TICK || tick > MAX_TICK) {
            throw new Error("Tick out of bounds.");
        }

        const abs_tick = Math.abs(tick);
        let sqrt_price = new Decimal("1");

        if (abs_tick & 0x1) {
            sqrt_price = sqrt_price.mul(PRICE_0X1);
        }
        if (abs_tick & 0x2) {
            sqrt_price = sqrt_price.mul(PRICE_0X2);
        }
        if (abs_tick & 0x4) {
            sqrt_price = sqrt_price.mul(PRICE_0X4);
        }
        if (abs_tick & 0x8) {
            sqrt_price = sqrt_price.mul(PRICE_0X8);
        }
        if (abs_tick & 0x10) {
            sqrt_price = sqrt_price.mul(PRICE_0X10);
        }
        if (abs_tick & 0x20) {
            sqrt_price = sqrt_price.mul(PRICE_0X20);
        }
        if (abs_tick & 0x40) {
            sqrt_price = sqrt_price.mul(PRICE_0X40);
        }
        if (abs_tick & 0x80) {
            sqrt_price = sqrt_price.mul(PRICE_0X80);
        }
        if (abs_tick & 0x100) {
            sqrt_price = sqrt_price.mul(PRICE_0X100);
        }
        if (abs_tick & 0x200) {
            sqrt_price = sqrt_price.mul(PRICE_0X200);
        }
        if (abs_tick & 0x400) {
            sqrt_price = sqrt_price.mul(PRICE_0X400);
        }
        if (abs_tick & 0x800) {
            sqrt_price = sqrt_price.mul(PRICE_0X800);
        }
        if (abs_tick & 0x1000) {
            sqrt_price = sqrt_price.mul(PRICE_0X1000);
        }
        if (abs_tick & 0x2000) {
            sqrt_price = sqrt_price.mul(PRICE_0X2000);
        }
        if (abs_tick & 0x4000) {
            sqrt_price = sqrt_price.mul(PRICE_0X4000);
        }
        if (abs_tick & 0x8000) {
            sqrt_price = sqrt_price.mul(PRICE_0X8000);
        }
        if (abs_tick & 0x10000) {
            sqrt_price = sqrt_price.mul(PRICE_0X10000);
        }
        if (abs_tick & 0x20000) {
            sqrt_price = sqrt_price.mul(PRICE_0X20000);
        }
        if (abs_tick & 0x40000) {
            sqrt_price = sqrt_price.mul(PRICE_0X40000);
        }
        if (abs_tick & 0x80000) {
            sqrt_price = sqrt_price.mul(PRICE_0X80000);
        }

        if (tick < 0) {
            sqrt_price = new Decimal("1").div(sqrt_price);
        }

        return sqrt_price;
    }

/**
 * We use the same property used to compute sqrt_price_at_tick, to compute tick_at_sqrt_price, but instead of multiplying, now we
 * are dividing the given price by the pre-computed constants, in the same time adding the corresponding exponent to the target tick.
 * 
 * In the end we want to make sure the sqrt_price_at_tick and tick_at_sqrt_price return consistent values, avoiding rounding errors.
 */
export const tickAtSqrtPrice: (sqrt_price_in: Decimal) => number =
    sqrt_price_in => {
        if (sqrt_price_in.comparedTo(MIN_PRICE) < 0 || sqrt_price_in.comparedTo(MAX_PRICE) > 0) {
            throw new Error("Sqrt price out of bounds.")
        }

        const is_negative_tick = sqrt_price_in.comparedTo(new Decimal("1")) < 0
        let sqrt_price = is_negative_tick ? new Decimal("1").div(sqrt_price_in) : sqrt_price_in
        let tick = 0
        if (sqrt_price.comparedTo(PRICE_0X80000) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X80000)
            tick += 0x80000; //2^19
        }
        if (sqrt_price.comparedTo(PRICE_0X40000) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X40000);
            tick += 0x40000 //2^18
        }
        if (sqrt_price.comparedTo(PRICE_0X20000) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X20000);
            tick += 0x20000; //2^17
        }
        if (sqrt_price.comparedTo(PRICE_0X10000) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X10000);
            tick += 0x10000; //2^16
        }
        if (sqrt_price.comparedTo(PRICE_0X8000) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X8000);
            tick += 0x8000; //2^15
        }
        if (sqrt_price.comparedTo(PRICE_0X4000) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X4000);
            tick += 0x4000; //2^14
        }
        if (sqrt_price.comparedTo(PRICE_0X2000) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X2000);
            tick += 0x2000; //2^13
        }
        if (sqrt_price.comparedTo(PRICE_0X1000) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X1000);
            tick += 0x1000; //2^12
        }
        if (sqrt_price.comparedTo(PRICE_0X800) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X800);
            tick += 0x800; //2^11
        }
        if (sqrt_price.comparedTo(PRICE_0X400) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X400);
            tick += 0x400; //2^10
        }
        if (sqrt_price.comparedTo(PRICE_0X200) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X200);
            tick += 0x200; //2^9
        }
        if (sqrt_price.comparedTo(PRICE_0X100) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X100);
            tick += 0x100; //2^8
        }
        if (sqrt_price.comparedTo(PRICE_0X80) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X80);
            tick += 0x80; //2^7
        }
        if (sqrt_price.comparedTo(PRICE_0X40) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X40);
            tick += 0x40; //2^6
        }
        if (sqrt_price.comparedTo(PRICE_0X20) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X20);
            tick += 0x20; //2^5
        }
        if (sqrt_price.comparedTo(PRICE_0X10) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X10);
            tick += 0x10; //2^4
        }
        if (sqrt_price.comparedTo(PRICE_0X8) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X8);
            tick += 0x8; //2^3
        }
        if (sqrt_price.comparedTo(PRICE_0X4) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X4);
            tick += 0x4; //2^2
        }
        if (sqrt_price.comparedTo(PRICE_0X2) >= 0) {
            sqrt_price = sqrt_price.div(PRICE_0X2);
            tick += 0x2; //2^1
        }
        if (sqrt_price.comparedTo(PRICE_0X1) >= 0) {
            tick += 0x1; //2^0
        }

        let tick_candidate = is_negative_tick ? -tick : tick;
        console.log("tick_candidate=" + tick_candidate)
        let sqrt_price_tick_candidate = to18DecPlaces(sqrtPriceAtTick(tick_candidate));
        console.log("sqrt_price_tick_candidate=" + sqrt_price_tick_candidate)
        console.log("sqrt_price_in=" + sqrt_price_in)
        if (sqrt_price_tick_candidate.comparedTo(sqrt_price_in) === 0) {
            return tick_candidate
        }
        else if (sqrt_price_tick_candidate.comparedTo(sqrt_price_in) > 0) {
            return tick_candidate - 1
        }
        else {
            return tick_candidate + 1
        }
    }