import React from 'react';

export default function SearchBar() {
    return (
        <React.Fragment>
            <div class="Search_Bar">
                <div class="Search_Bar_item">
                    <ul class="search-navtabs">
                        <li><i class="icon-search-01"></i><span>國小高年級</span></li>
                        <li><i class="icon-search-02"></i><span>健康與體育</span></li>
                        <li><i class="icon-search-03"></i><span>學習地區</span></li>
                    </ul>
                    <div class="search-container">
                        <input type="text" placeholder="請輸入.." name="search" />
                        <button type="submit">搜 尋</button>
                    </div>
                    <div class="search_datawrap">
                        <div class="search_info" style={{ display: 'none' }}>
                            <p>無關聯教案，請重新搜尋！</p>
                        </div>
                        <div class="search_info" style={{ display: 'none' }}>
                            <button>台北市</button>
                            <button>新北市</button>
                            <button>基隆市</button>
                            <button>桃園市</button>
                            <button>新竹市</button>
                            <button>新竹縣</button>
                            <button>苗栗縣</button>
                            <button>台中市</button>
                            <button>彰化縣</button>
                            <button>南投縣</button>
                            <button>雲林縣</button>
                            <button>嘉義市</button>
                            <button>嘉義縣</button>
                            <button>台南市</button>
                            <button>高雄市</button>
                            <button>屏東縣</button>
                            <button>宜蘭縣</button>
                            <button>花蓮縣</button>
                            <button>台東縣</button>
                            <button>澎湖縣</button>
                            <button>金門縣</button>
                            <button>連江縣</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}