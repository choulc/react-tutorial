import React from 'react';

const DetailPlan = () => {
    return (
        <React.Fragment>
            <section className="cases-main m_10em">
                <div className="share-box">
                    <ul className="share-itme l_float">
                        <li className="bk"><span className="share-01"></span></li>
                        <li> <span className="share-02">facebook</span></li>
                        <li> <span className="share-03">line</span></li>
                    </ul>
                    <ul className="share-itme r_float">
                        <li><span className="share-04">翰林出版</span></li>
                        <li><span className="share-05">天下雜誌</span></li>
                    </ul>
                </div>
                <h3 className="clearfix">深化在地學習之 </h3>
                <div className="intro_box">
                    <ul className="w_40">
                        <li><span>適合階段：</span>國小高年級</li>
                        <li><span> 年度：</span>2016</li>
                        <li><span> 獎項：</span>綠色能源教育獎</li>
                        <li><span> 地區：</span>嘉義縣、新竹市、台東市</li>
                    </ul>
                    <ul className="w_60">
                        <li><span>科目：</span>本國語文、社會、綜合活動、健康與體育、藝術、科技、數學</li>
                        <li><span>教師：</span>陳政典、蔡雅涵、吳佩珊、劉曉慶</li>
                        <li><span>學校：</span>高雄市大同國民小學、台中教育大學附設實驗小學、高雄市陽明國民小學、高雄市陽明國民小學</li>
                    </ul>
                </div>
                <div className="video-shadow">
                    {/* <!-- <div className="iframe-img"></div> --> */}
                    <iframe width="1280" height="717" src="https://www.youtube.com/embed/JcqqrzU8gKg" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div className="intro_text">
                    <p>六年級的數學，偏向探討數與數間的關係，漸漸的抽象化，也導致孩子會感覺數學跟生活脫節，覺得數學只是在算課本上的題目，對實際生活動並無幫助。</p>
                    <p>為了使六年級的孩子對於六年級所學的數學，能感覺到趣味與些許的實用性，特別設計一系列的闖關遊戲，讓六年級學到的數學知識，破解各個難關，體會數學的實用與需求。也希望透過這這樣的遊戲設計，讓畢業前夕的六年級孩子，用不同的方式，檢核自己的學習成效。
                    本次教學設計運用了數位遊戲式學習（Digital game based
                    learning）的特點進行課程內容發想，以數學步道呈現學習的真實感，利用實境解謎的方式，讓孩子在學習中自主探索與解謎，完成六年級數學學習的總結性評量，並運用PsyCAL (Psycology of
                    Computer Assisted Learning)概念，提升學習成效。</p>
                    <p> 希望藉由本次數位實境數學解謎遊戲，孩子能從中培養觀察力,邏輯力以及統整能力，並能與他人合作，運用策略找出問題的解決方法，在活動中實現自主行動，與他人合作溝通，成為積極參與的終身學習者。</p>
                </div>
            </section>
        </React.Fragment>
    );
}

export default DetailPlan;