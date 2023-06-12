import { expect, test } from 'vitest'
import Decimal from 'decimal.js';
import { sqrtPriceAtTick, tickAtSqrtPrice, MIN_PRICE, MAX_PRICE, MIN_TICK, MAX_TICK } from './tickMath'
import { to18DecPlaces } from './utils';

test('Sqrt price at tick', async () => {
    expect(to18DecPlaces(sqrtPriceAtTick(MIN_TICK))).toEqual(MIN_PRICE);
    expect(to18DecPlaces(sqrtPriceAtTick(-440170))).toEqual(new Decimal("0.000000000276890319"));
    expect(to18DecPlaces(sqrtPriceAtTick(-3))).toEqual(new Decimal("0.999850018747812746"));
    expect(to18DecPlaces(sqrtPriceAtTick(-1))).toEqual(new Decimal("0.999950003749687527"));
    expect(to18DecPlaces(sqrtPriceAtTick(0))).toEqual(new Decimal("1"));
    expect(to18DecPlaces(sqrtPriceAtTick(3))).toEqual(new Decimal("1.000150003749937502"));
    expect(to18DecPlaces(sqrtPriceAtTick(5))).toEqual(new Decimal("1.000250018750312495"));
    expect(to18DecPlaces(sqrtPriceAtTick(7458))).toEqual(new Decimal("1.451912069310694304"));
    expect(to18DecPlaces(sqrtPriceAtTick(51368))).toEqual(new Decimal("13.043260825729387403"));
    expect(to18DecPlaces(sqrtPriceAtTick(440171))).toEqual(new Decimal("3611718901.097549658697824462"));

    // 3611718901.097549658697824462
    // 3611718901.097549657198717522 48120358422510942152251127508917292189001085552568322152174397

    expect(to18DecPlaces(sqrtPriceAtTick(600000))).toEqual(new Decimal("10670457952892.911130846245697062"));
    expect(to18DecPlaces(sqrtPriceAtTick(800000))).toEqual(new Decimal("234914998079838151.753452449421207106"));
    expect(to18DecPlaces(sqrtPriceAtTick(900000))).toEqual(new Decimal("34855762536668018936.5151644117199581"));

    //34855762536668018936.5151644117199581
    //34855762536668018919.8484109667097499571994203146447846358330453037090475232756851975653843

    for (let i = 0; i < 20; i++) {
        console.log("√1.0001^(2^" + i + ")=" + new Decimal("1.00004999875006249609402341699379869721549895065686478843687006584219196992277770622933351").pow(new Decimal("2").pow(i)))
    }
    console.log(new Decimal("1.0001").sqrt())
    console.log(new Decimal("1.00004999875006249609402341699379869721549895065686478843687006584219196992277770622933351").pow(931709))
    console.log(new Decimal("1.00004999875006249609402341699379869721549895065686478843687006584219196992277770622933351").pow(900000))
    console.log(new Decimal("1.00004999875006249609402341699379869721549895065686478843687006584219196992277770622933351").pow(800000))
    console.log(new Decimal("1.00004999875006249609402341699379869721549895065686478843687006584219196992277770622933351").pow(600000))
    console.log(new Decimal("170134484377338262665.919079467083019394530122698447827104829616052092551684391131585079358")
        .log(new Decimal("1.00004999875006249609402341699379869721549895065686478843687006584219196992277770622933351")))
    expect(to18DecPlaces(sqrtPriceAtTick(MAX_TICK))).toEqual(MAX_PRICE);


    // 1701344843773382626 65.919079467083019394 530122698447827104829616052092551684391131585079358
    // 1701344843773382626 26.059296303521085811
    // 1701344843773382626 26.059296302818673228

    // assert_eq!(Decimal:: one(), sqrt_price_at_tick(0));
    // assert_eq!(dec!("1.000150003749937502"), sqrt_price_at_tick(3));
    // assert_eq!(dec!("1.000250018750312495"), sqrt_price_at_tick(5));
    // assert_eq!(dec!("1.451912069310684182"), sqrt_price_at_tick(7458));
    // assert_eq!(dec!("13.043260825728760908"), sqrt_price_at_tick(51368));
    // assert_eq!(dec!("3611718901.096063128233128884"), sqrt_price_at_tick(440171));
    // assert_eq!(MAX_PRICE, sqrt_price_at_tick(MAX_TICK));
})

test('Tick at sqrt price', async () => {
    expect(tickAtSqrtPrice(MIN_PRICE)).toEqual(MIN_TICK);
    expect(tickAtSqrtPrice(MAX_PRICE)).toEqual(MAX_TICK);

    expect(tickAtSqrtPrice(new Decimal("1.451912069310694302"))).toEqual(7458);
    expect(tickAtSqrtPrice(new Decimal("1.451912069310694304"))).toEqual(7458);
    
    
    expect(tickAtSqrtPrice(new Decimal("13.043260825729387373"))).toEqual(51368);
})