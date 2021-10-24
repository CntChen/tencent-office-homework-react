import { strToNumber, numberToStr } from 'src/common/utils';

/**
 * @author cntchen
 * @priority P0
 * @casetype unit
 */
describe('utils', () => {
    it('strToNumber -- normal', () => {
        const result = strToNumber('1024');

        expect(result).toEqual(1024);
    });

    it('strToNumber -- NaN', () => {
        const result = strToNumber('abcd');

        expect(result).toEqual(NaN);
    });

    it('numToStr', () => {
        const result = numberToStr(1024);

        expect(result).toEqual('1024');
    });
});
