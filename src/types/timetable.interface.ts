type classDetail = {
    classname: string;
    teacher: string;
}

export interface table{
    1: classDetail;
    2: classDetail;
    3: classDetail;
    4: classDetail;
    5: classDetail;
    6: classDetail;
    7: classDetail;
    8: classDetail;
};

export interface TimeTable<T> {
    day1: T;
    day2: T;
    day3: T;
    day4: T;
    day5: T;
    day6: T;
};