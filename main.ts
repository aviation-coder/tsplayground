const str: String = "TypeScript"
const num: Int = 100
const bool: Boolean = true

export interface TypeScript {
  codingLanguage: String;
  isGood: Boolean;
  experienced: Boolean;
  [key:string]: any
}

const Obj: TypeScript = {
   codingLanguage: "TypeScript",
   isGood: true,
   experienced: true
   otherKey: true
}
