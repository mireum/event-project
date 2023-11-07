import festivalListItem from "../전국문화축제표준데이터.json";

export const testdb = JSON.stringify(festivalListItem.records.filter((item) => item.축제시작일자 > '2023-01-01').slice(0,50))

export const getFestivalItem = festivalListItem.records.slice(0, 50)
