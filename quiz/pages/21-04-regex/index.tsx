// /apple/.test ("apple")
// ture
// /aplle/.tsest("appleq")
// false
// /%\w+@\w+$/.test("asdfasd@a;com")
// ture
// /^\w+@\w+\.\w+$/.test("asdfasd@a.com")
// ture
// /010-1234-5678/ .test("010-1234-5678")
// ture
// /^\d{3}-/d{3,4}-/d{4}$/.test("123-1234-5678")
// ture
// [a-zA-Z]
// \s

// 1번 날짜 형식을 검증 하는 정규표현식
/^\d{4}\./d{2}\./d{2}



// 2번 휴대폰 형식 검증 정규표현식
/^\d{3}-/d{3,4}-/d{4}$/.test("123-1234-5678")


// 3. 이메일 형식을 검증하는 정규표현식
/^\w+@\w+\.\w+$/.test("aaa@bbb.com")
