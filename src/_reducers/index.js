import produce from "immer";

const baseState = {
    loading: false,
    error: "",
    stores: [
        {
            addr: "서울특별시 서대문구 수색로 32 (남가좌동)",
            code: "11826762",
            created_at: "2020/05/05 20:50:00",
            lat: 37.5695019,
            lng: 126.9151317,
            name: "솔약국",
            remain_stat: "plenty",
            stock_at: "2020/05/04 09:22:00",
            type: "01",
        },
        {
            addr: "서울특별시 서대문구 모래내로15길 48 (남가좌동)",
            code: "11829036",
            created_at: "2020/05/05 20:50:00",
            lat: 37.5738158,
            lng: 126.9196718,
            name: "세원약국",
            remain_stat: "break",
            stock_at: "2020/05/05 09:36:00",
            type: "01",
        },
        {
            addr: "서울특별시 서대문구 증가로 123 A동 101호 (남가좌동)",
            code: "11829087",
            created_at: "2020/05/05 20:50:00",
            lat: 37.5771993,
            lng: 126.9237139,
            name: "서린약국",
            remain_stat: "plenty",
            stock_at: "2020/05/04 08:52:00",
            type: "01",
        },
        {
            addr: "서울특별시 서대문구 거북골로 67 (남가좌동)",
            code: "11829109",
            created_at: "2020/05/05 20:50:00",
            lat: 37.5774402,
            lng: 126.9211485,
            name: "푸른약국",
            remain_stat: "plenty",
            stock_at: "2020/05/04 09:17:00",
            type: "01",
        },
        {
            addr: "서울특별시 서대문구 증가로 129 (남가좌동)",
            code: "11829150",
            created_at: "2020/05/05 20:50:00",
            lat: 37.577282,
            lng: 126.9232657,
            name: "모범약국",
            remain_stat: "plenty",
            stock_at: "2020/05/05 10:30:00",
            type: "01",
        },
    ],
};

const reducer = produce((state, action) => {}, baseState);

export default reducer;
