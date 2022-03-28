export default function TypescriptPage() {

    interface IProfile {
            name: string   
            age: number
            school: string
            hobby?: string
    }

    1.  pick  타입 
    type Mytyp1 = Pick<IProfile,"name"   | "age">


// 2. Omit 타입
    type Mytype2 = Omit<IProfile,"school">

    // 3. partial 타입
    type Mytype3 = Partial<IProfile>

    // 4.Required 타입
    type Mytype4 = Required<IProfile>

    // 5. Record 타입
    type ZZZ = "aaa" | "qqq" | "rrr" // union 타입

    // let apple: ZZZ
    // apple = "qqq"  // ZZZ = 정해둔걸로 바뀌었다. 유니온 타입  =  |    
    
    type MyType5 = Record<ZZZ, IProfile>
//  MyType5 위에 마우스 올리면 키 /밸류  로 분류됨


// ========= 추가(선언병합)  type vs interface 차이점   ====//
interface IProfile { 
    candy: number


}


let profile: IProfile
profile = {
     candy: 3, 
     age: 10, 
     hobby:"asdf"   
}

    return <div>타입스크립트 연습하기!!</div>

}
