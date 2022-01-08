import gleam/string

fn add(x, y) {
  x + y
}

pub fn replace(prefix prefix: String, suffix suffix: String) {
  string.append(prefix, suffix)
}

pub type Cat {
  Cat(name: String, cuteness: Int)
}

pub type User {
  // A logged in user with a name
  Admin(name: String, my_pass: String)
  LoggedIn(name: String)
  Guest
}

pub fn match_user(x) {
  case x {
    LoggedIn(_name) -> "LoggedIn User"
    Guest -> "Guest User"
    Admin(_, _) -> "Admin User"
  }
}

pub type Person {
  Person1(name: String, shoe_size: Int, age: Int, is_happy: Bool)
}

pub fn have_birthday(person: Person) {
  // It's this person's birthday, so increment their age and
  // make them happy
  Person1(..person, age: person.age + 1, is_happy: True)
}

// A guest user with no details
// Put it all together
pub fn main() {
  let some_bool = True && False
  let int_value = 10
  let float_value = 10.001

  let calculated = {
    "Hello"
    22 / 7
  }

  let farenheight = 100
  let cencius = { farenheight - 32 } * 5 / 9

  let list = [1, 2, 3, 4, 5]
  let tuple = #(10, 20, "Awesome Tuples")

  let user1 = LoggedIn("Harshal")
  let user2 = Guest
  let user3 = Admin("Harshal", "Patil")

  // Admin(..user3, my_pass: "NewPass")
  match_user(user1)
  match_user(user2)

  int_value + tuple.1
}
