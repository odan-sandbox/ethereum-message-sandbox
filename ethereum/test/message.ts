const Message = artifacts.require("Message");

contract("Message", () => {
  let message: any
  beforeEach(async () => {
    message = await Message.new()
  })

  it("should set and get value", async () => {
    const value = "poyo"
    message.setValue(value)

    const contractValue = await message.getValue()
    assert.equal(contractValue, value)
  });
});
