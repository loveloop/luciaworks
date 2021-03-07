    <!-- 예약하기 pop -->
    <div class="reservBox">
    <a href="#void" class="close"><i class="b-icon b-icon-close"></i><span class="blind">닫기</span></a>
    <div class="inner">
        <div class="checkin">
            <div>
                <label for="from">체크인</label>
                <input type="text" id="from" name="from" readonly required>
            </div>
            <div>
                <label for="to">체크아웃</label>
                <input type="text" id="to" name="to" readonly required>
            </div>
        </div>
        <div class="counter">
            <div>
                <p>객실수</p>
                <div class="countWrap">
                    <button class="minusBtn"><i class="b-icon b-icon-minus"></i></button>
                    <input type="text" value="0" class="countVal" readonly />

                    <button class="plusBtn"><i class="b-icon b-icon-plus"></i></button>
                </div>
            </div>
            <div>
                <p>성인</p>
                <div class="countWrap">
                    <button class="minusBtn"><i class="b-icon b-icon-minus"></i></button>
                    <input type="text" value="0" class="countVal" readonly />
                    <button class="plusBtn"><i class="b-icon b-icon-plus"></i></button>
                </div>
            </div>
            <div>
                <p>어린이</p>
                <div class="countWrap">
                    <button class="minusBtn"><i class="b-icon b-icon-minus"></i></button>
                    <input type="text" value="0" class="countVal" readonly />
                    <button class="plusBtn"><i class="b-icon b-icon-plus"></i></button>
                </div>
            </div>
            <button id="resetButton">RESET</button>
        </div>
        <div class="point">
            <div class="selectBox">
                <select name="promotion" id="promotion">
                    <option selected="selected" disabled>특별할인요금</option>
                    <option>없음</option>
                    <option>정부</option>
                    <option>재향군인</option>
                    <option>AAA/CAA 회원</option>
                    <option>고령자</option>
                    <option>특별 행사 코드</option>
                    <option>기업 또는 단체 코드</option>
                </select>
                <span class="select__arrow"></span>
            </div>
            <div class="useCheck">
                <input type="checkbox" name="usePoint" id="usePoint">
                <label for="usePoint">포인트 사용</label>
            </div>
        </div>
        <div class="search">
            <a href="#void" class="searchBtn"><i class="b-icon b-icon-search"></i><span class="blind">찾기</span></a>
        </div>
    </div>
</div>