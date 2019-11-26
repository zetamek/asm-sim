/*
    List of operation codes

    Notes:
    - Some operations may need a different amount of
    reserved bytes.
*/

"use strict";

export const Opcodes = {
    NOP: 0,

    // MOV
    MOV_REG_TO_REG: 1,              // Needs next 1 byte
    MOV_ADDRESS_TO_REG: 2,          // Needs next 2 bytes
    MOV_REGADDRESS_TO_REG: 3,       // Needs next 1 byte
    MOV_REG_TO_ADDRESS: 4,          // Needs next 2 bytes
    MOV_REG_TO_REGADDRESS: 5,       // Needs next 1 byte
    MOV_NUMBER_TO_REG: 6,           // Needs next 2 bytes
    MOV_NUMBER_TO_ADDRESS: 7,       // Needs next 2 bytes
    MOV_NUMBER_TO_REGADDRESS: 8,    // Needs next 2 bytes

    // ADD
    ADD_REG_TO_REG: 9,              // Needs next 1 byte
    ADD_REGADDRESS_TO_REG: 10,      // Needs next 1 byte
    ADD_ADDRESS_TO_REG: 11,         // Needs next 2 bytes
    ADD_NUMBER_TO_REG: 12,          // Needs next 2 bytes
    
    // SUB
    SUB_REG_FROM_REG: 14,           // Needs next 1 byte
    SUB_REGADDRESS_FROM_REG: 15,    // Needs next 1 byte
    SUB_ADDRESS_FROM_REG: 16,       // Needs next 2 bytes
    SUB_NUMBER_FROM_REG: 17,        // Needs next 2 bytes

    // INC, DEC
    INC_REG: 18,                    // Needs next 1 byte
    DEC_REG: 19                     // Needs next 1 byte
    // CMP
    // JMP, JC, JNC, JZ, JNZ, JA, JNA
    // PUSH, POP
    // CALL, RET
    // MUL, DIV
    // AND, OR, XOR, NOT, SHL, SHR
    
    STOP: 255
}