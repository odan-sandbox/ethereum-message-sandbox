pragma solidity 0.5.6;

contract Message {
    string private value;

    function setValue(string memory _value) public {
        value = _value;
    }

    function getValue() public view returns(string memory) {
        return value;
    }
}