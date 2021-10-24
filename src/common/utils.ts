/**
 * 示例工具函数, 将字符串转换为数字
 */
export const strToNumber = (str: string): number => {
    try {
        return Number(str);
    } catch (error) {
        return NaN;
    }
};

/**
 * 示例工具函数, 将数字转换为字符串
 */
export const numberToStr = (num: number): string => {
    const str = num.toString();
    return str;
};
