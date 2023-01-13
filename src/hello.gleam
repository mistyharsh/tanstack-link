import gleam/io
import ffi

pub fn main() {
  let result =
    ffi.run(
      "
        query {
          posts {
            title
            body
          }
        }
      ",
    )

  io.println("Hello from hello_gleam!")
  ffi.inspect(result)
}
