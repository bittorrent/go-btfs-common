// Code generated by protoc-gen-go. DO NOT EDIT.
// source: protos/escrow/ledger.proto

package ledger

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Null struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Null) Reset()         { *m = Null{} }
func (m *Null) String() string { return proto.CompactTextString(m) }
func (*Null) ProtoMessage()    {}
func (*Null) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{0}
}

func (m *Null) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Null.Unmarshal(m, b)
}
func (m *Null) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Null.Marshal(b, m, deterministic)
}
func (m *Null) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Null.Merge(m, src)
}
func (m *Null) XXX_Size() int {
	return xxx_messageInfo_Null.Size(m)
}
func (m *Null) XXX_DiscardUnknown() {
	xxx_messageInfo_Null.DiscardUnknown(m)
}

var xxx_messageInfo_Null proto.InternalMessageInfo

type PublicKey struct {
	Key                  []byte   `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PublicKey) Reset()         { *m = PublicKey{} }
func (m *PublicKey) String() string { return proto.CompactTextString(m) }
func (*PublicKey) ProtoMessage()    {}
func (*PublicKey) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{1}
}

func (m *PublicKey) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PublicKey.Unmarshal(m, b)
}
func (m *PublicKey) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PublicKey.Marshal(b, m, deterministic)
}
func (m *PublicKey) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PublicKey.Merge(m, src)
}
func (m *PublicKey) XXX_Size() int {
	return xxx_messageInfo_PublicKey.Size(m)
}
func (m *PublicKey) XXX_DiscardUnknown() {
	xxx_messageInfo_PublicKey.DiscardUnknown(m)
}

var xxx_messageInfo_PublicKey proto.InternalMessageInfo

func (m *PublicKey) GetKey() []byte {
	if m != nil {
		return m.Key
	}
	return nil
}

type ChannelCommit struct {
	Payer                *PublicKey `protobuf:"bytes,1,opt,name=payer,proto3" json:"payer,omitempty"`
	Recipient            *PublicKey `protobuf:"bytes,2,opt,name=recipient,proto3" json:"recipient,omitempty"`
	Amount               int64      `protobuf:"varint,3,opt,name=amount,proto3" json:"amount,omitempty"`
	PayerId              int64      `protobuf:"varint,4,opt,name=payer_id,json=payerId,proto3" json:"payer_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *ChannelCommit) Reset()         { *m = ChannelCommit{} }
func (m *ChannelCommit) String() string { return proto.CompactTextString(m) }
func (*ChannelCommit) ProtoMessage()    {}
func (*ChannelCommit) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{2}
}

func (m *ChannelCommit) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChannelCommit.Unmarshal(m, b)
}
func (m *ChannelCommit) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChannelCommit.Marshal(b, m, deterministic)
}
func (m *ChannelCommit) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChannelCommit.Merge(m, src)
}
func (m *ChannelCommit) XXX_Size() int {
	return xxx_messageInfo_ChannelCommit.Size(m)
}
func (m *ChannelCommit) XXX_DiscardUnknown() {
	xxx_messageInfo_ChannelCommit.DiscardUnknown(m)
}

var xxx_messageInfo_ChannelCommit proto.InternalMessageInfo

func (m *ChannelCommit) GetPayer() *PublicKey {
	if m != nil {
		return m.Payer
	}
	return nil
}

func (m *ChannelCommit) GetRecipient() *PublicKey {
	if m != nil {
		return m.Recipient
	}
	return nil
}

func (m *ChannelCommit) GetAmount() int64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

func (m *ChannelCommit) GetPayerId() int64 {
	if m != nil {
		return m.PayerId
	}
	return 0
}

type SignedChannelCommit struct {
	Channel              *ChannelCommit `protobuf:"bytes,1,opt,name=channel,proto3" json:"channel,omitempty"`
	Signature            []byte         `protobuf:"bytes,2,opt,name=signature,proto3" json:"signature,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *SignedChannelCommit) Reset()         { *m = SignedChannelCommit{} }
func (m *SignedChannelCommit) String() string { return proto.CompactTextString(m) }
func (*SignedChannelCommit) ProtoMessage()    {}
func (*SignedChannelCommit) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{3}
}

func (m *SignedChannelCommit) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SignedChannelCommit.Unmarshal(m, b)
}
func (m *SignedChannelCommit) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SignedChannelCommit.Marshal(b, m, deterministic)
}
func (m *SignedChannelCommit) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SignedChannelCommit.Merge(m, src)
}
func (m *SignedChannelCommit) XXX_Size() int {
	return xxx_messageInfo_SignedChannelCommit.Size(m)
}
func (m *SignedChannelCommit) XXX_DiscardUnknown() {
	xxx_messageInfo_SignedChannelCommit.DiscardUnknown(m)
}

var xxx_messageInfo_SignedChannelCommit proto.InternalMessageInfo

func (m *SignedChannelCommit) GetChannel() *ChannelCommit {
	if m != nil {
		return m.Channel
	}
	return nil
}

func (m *SignedChannelCommit) GetSignature() []byte {
	if m != nil {
		return m.Signature
	}
	return nil
}

type CreateAccountResult struct {
	Account              *Account `protobuf:"bytes,1,opt,name=account,proto3" json:"account,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateAccountResult) Reset()         { *m = CreateAccountResult{} }
func (m *CreateAccountResult) String() string { return proto.CompactTextString(m) }
func (*CreateAccountResult) ProtoMessage()    {}
func (*CreateAccountResult) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{4}
}

func (m *CreateAccountResult) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateAccountResult.Unmarshal(m, b)
}
func (m *CreateAccountResult) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateAccountResult.Marshal(b, m, deterministic)
}
func (m *CreateAccountResult) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateAccountResult.Merge(m, src)
}
func (m *CreateAccountResult) XXX_Size() int {
	return xxx_messageInfo_CreateAccountResult.Size(m)
}
func (m *CreateAccountResult) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateAccountResult.DiscardUnknown(m)
}

var xxx_messageInfo_CreateAccountResult proto.InternalMessageInfo

func (m *CreateAccountResult) GetAccount() *Account {
	if m != nil {
		return m.Account
	}
	return nil
}

type Account struct {
	Address *PublicKey `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	// Current available balance
	Balance              int64    `protobuf:"varint,2,opt,name=balance,proto3" json:"balance,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Account) Reset()         { *m = Account{} }
func (m *Account) String() string { return proto.CompactTextString(m) }
func (*Account) ProtoMessage()    {}
func (*Account) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{5}
}

func (m *Account) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Account.Unmarshal(m, b)
}
func (m *Account) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Account.Marshal(b, m, deterministic)
}
func (m *Account) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Account.Merge(m, src)
}
func (m *Account) XXX_Size() int {
	return xxx_messageInfo_Account.Size(m)
}
func (m *Account) XXX_DiscardUnknown() {
	xxx_messageInfo_Account.DiscardUnknown(m)
}

var xxx_messageInfo_Account proto.InternalMessageInfo

func (m *Account) GetAddress() *PublicKey {
	if m != nil {
		return m.Address
	}
	return nil
}

func (m *Account) GetBalance() int64 {
	if m != nil {
		return m.Balance
	}
	return 0
}

type ChannelID struct {
	Id                   int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ChannelID) Reset()         { *m = ChannelID{} }
func (m *ChannelID) String() string { return proto.CompactTextString(m) }
func (*ChannelID) ProtoMessage()    {}
func (*ChannelID) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{6}
}

func (m *ChannelID) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChannelID.Unmarshal(m, b)
}
func (m *ChannelID) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChannelID.Marshal(b, m, deterministic)
}
func (m *ChannelID) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChannelID.Merge(m, src)
}
func (m *ChannelID) XXX_Size() int {
	return xxx_messageInfo_ChannelID.Size(m)
}
func (m *ChannelID) XXX_DiscardUnknown() {
	xxx_messageInfo_ChannelID.DiscardUnknown(m)
}

var xxx_messageInfo_ChannelID proto.InternalMessageInfo

func (m *ChannelID) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

type ChannelInfo struct {
	Id                   *ChannelID `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	FromAccount          *Account   `protobuf:"bytes,2,opt,name=from_account,json=fromAccount,proto3" json:"from_account,omitempty"`
	ToAccount            *Account   `protobuf:"bytes,3,opt,name=to_account,json=toAccount,proto3" json:"to_account,omitempty"`
	CloseSequence        int64      `protobuf:"varint,4,opt,name=close_sequence,json=closeSequence,proto3" json:"close_sequence,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *ChannelInfo) Reset()         { *m = ChannelInfo{} }
func (m *ChannelInfo) String() string { return proto.CompactTextString(m) }
func (*ChannelInfo) ProtoMessage()    {}
func (*ChannelInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{7}
}

func (m *ChannelInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChannelInfo.Unmarshal(m, b)
}
func (m *ChannelInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChannelInfo.Marshal(b, m, deterministic)
}
func (m *ChannelInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChannelInfo.Merge(m, src)
}
func (m *ChannelInfo) XXX_Size() int {
	return xxx_messageInfo_ChannelInfo.Size(m)
}
func (m *ChannelInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_ChannelInfo.DiscardUnknown(m)
}

var xxx_messageInfo_ChannelInfo proto.InternalMessageInfo

func (m *ChannelInfo) GetId() *ChannelID {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *ChannelInfo) GetFromAccount() *Account {
	if m != nil {
		return m.FromAccount
	}
	return nil
}

func (m *ChannelInfo) GetToAccount() *Account {
	if m != nil {
		return m.ToAccount
	}
	return nil
}

func (m *ChannelInfo) GetCloseSequence() int64 {
	if m != nil {
		return m.CloseSequence
	}
	return 0
}

type SignedChannelState struct {
	Channel              *ChannelState `protobuf:"bytes,1,opt,name=channel,proto3" json:"channel,omitempty"`
	FromSignature        []byte        `protobuf:"bytes,2,opt,name=from_signature,json=fromSignature,proto3" json:"from_signature,omitempty"`
	ToSignature          []byte        `protobuf:"bytes,3,opt,name=to_signature,json=toSignature,proto3" json:"to_signature,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *SignedChannelState) Reset()         { *m = SignedChannelState{} }
func (m *SignedChannelState) String() string { return proto.CompactTextString(m) }
func (*SignedChannelState) ProtoMessage()    {}
func (*SignedChannelState) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{8}
}

func (m *SignedChannelState) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SignedChannelState.Unmarshal(m, b)
}
func (m *SignedChannelState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SignedChannelState.Marshal(b, m, deterministic)
}
func (m *SignedChannelState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SignedChannelState.Merge(m, src)
}
func (m *SignedChannelState) XXX_Size() int {
	return xxx_messageInfo_SignedChannelState.Size(m)
}
func (m *SignedChannelState) XXX_DiscardUnknown() {
	xxx_messageInfo_SignedChannelState.DiscardUnknown(m)
}

var xxx_messageInfo_SignedChannelState proto.InternalMessageInfo

func (m *SignedChannelState) GetChannel() *ChannelState {
	if m != nil {
		return m.Channel
	}
	return nil
}

func (m *SignedChannelState) GetFromSignature() []byte {
	if m != nil {
		return m.FromSignature
	}
	return nil
}

func (m *SignedChannelState) GetToSignature() []byte {
	if m != nil {
		return m.ToSignature
	}
	return nil
}

type ClosedChannelCursor struct {
	Payer                *PublicKey `protobuf:"bytes,1,opt,name=payer,proto3" json:"payer,omitempty"`
	CloseSequence        int64      `protobuf:"varint,2,opt,name=close_sequence,json=closeSequence,proto3" json:"close_sequence,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *ClosedChannelCursor) Reset()         { *m = ClosedChannelCursor{} }
func (m *ClosedChannelCursor) String() string { return proto.CompactTextString(m) }
func (*ClosedChannelCursor) ProtoMessage()    {}
func (*ClosedChannelCursor) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{9}
}

func (m *ClosedChannelCursor) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ClosedChannelCursor.Unmarshal(m, b)
}
func (m *ClosedChannelCursor) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ClosedChannelCursor.Marshal(b, m, deterministic)
}
func (m *ClosedChannelCursor) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ClosedChannelCursor.Merge(m, src)
}
func (m *ClosedChannelCursor) XXX_Size() int {
	return xxx_messageInfo_ClosedChannelCursor.Size(m)
}
func (m *ClosedChannelCursor) XXX_DiscardUnknown() {
	xxx_messageInfo_ClosedChannelCursor.DiscardUnknown(m)
}

var xxx_messageInfo_ClosedChannelCursor proto.InternalMessageInfo

func (m *ClosedChannelCursor) GetPayer() *PublicKey {
	if m != nil {
		return m.Payer
	}
	return nil
}

func (m *ClosedChannelCursor) GetCloseSequence() int64 {
	if m != nil {
		return m.CloseSequence
	}
	return 0
}

type ChannelState struct {
	Id                   *ChannelID `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Sequence             int64      `protobuf:"varint,2,opt,name=sequence,proto3" json:"sequence,omitempty"`
	From                 *Account   `protobuf:"bytes,3,opt,name=from,proto3" json:"from,omitempty"`
	To                   *Account   `protobuf:"bytes,4,opt,name=to,proto3" json:"to,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *ChannelState) Reset()         { *m = ChannelState{} }
func (m *ChannelState) String() string { return proto.CompactTextString(m) }
func (*ChannelState) ProtoMessage()    {}
func (*ChannelState) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{10}
}

func (m *ChannelState) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChannelState.Unmarshal(m, b)
}
func (m *ChannelState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChannelState.Marshal(b, m, deterministic)
}
func (m *ChannelState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChannelState.Merge(m, src)
}
func (m *ChannelState) XXX_Size() int {
	return xxx_messageInfo_ChannelState.Size(m)
}
func (m *ChannelState) XXX_DiscardUnknown() {
	xxx_messageInfo_ChannelState.DiscardUnknown(m)
}

var xxx_messageInfo_ChannelState proto.InternalMessageInfo

func (m *ChannelState) GetId() *ChannelID {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *ChannelState) GetSequence() int64 {
	if m != nil {
		return m.Sequence
	}
	return 0
}

func (m *ChannelState) GetFrom() *Account {
	if m != nil {
		return m.From
	}
	return nil
}

func (m *ChannelState) GetTo() *Account {
	if m != nil {
		return m.To
	}
	return nil
}

type ChannelClosed struct {
	State                *SignedChannelState `protobuf:"bytes,1,opt,name=state,proto3" json:"state,omitempty"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *ChannelClosed) Reset()         { *m = ChannelClosed{} }
func (m *ChannelClosed) String() string { return proto.CompactTextString(m) }
func (*ChannelClosed) ProtoMessage()    {}
func (*ChannelClosed) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{11}
}

func (m *ChannelClosed) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChannelClosed.Unmarshal(m, b)
}
func (m *ChannelClosed) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChannelClosed.Marshal(b, m, deterministic)
}
func (m *ChannelClosed) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChannelClosed.Merge(m, src)
}
func (m *ChannelClosed) XXX_Size() int {
	return xxx_messageInfo_ChannelClosed.Size(m)
}
func (m *ChannelClosed) XXX_DiscardUnknown() {
	xxx_messageInfo_ChannelClosed.DiscardUnknown(m)
}

var xxx_messageInfo_ChannelClosed proto.InternalMessageInfo

func (m *ChannelClosed) GetState() *SignedChannelState {
	if m != nil {
		return m.State
	}
	return nil
}

type SignedPublicKeyPair struct {
	OldKey               *PublicKey `protobuf:"bytes,1,opt,name=old_key,json=oldKey,proto3" json:"old_key,omitempty"`
	NewKey               *PublicKey `protobuf:"bytes,2,opt,name=new_key,json=newKey,proto3" json:"new_key,omitempty"`
	OldSignature         []byte     `protobuf:"bytes,3,opt,name=old_signature,json=oldSignature,proto3" json:"old_signature,omitempty"`
	NewSignature         []byte     `protobuf:"bytes,4,opt,name=new_signature,json=newSignature,proto3" json:"new_signature,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *SignedPublicKeyPair) Reset()         { *m = SignedPublicKeyPair{} }
func (m *SignedPublicKeyPair) String() string { return proto.CompactTextString(m) }
func (*SignedPublicKeyPair) ProtoMessage()    {}
func (*SignedPublicKeyPair) Descriptor() ([]byte, []int) {
	return fileDescriptor_664c593717b46779, []int{12}
}

func (m *SignedPublicKeyPair) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SignedPublicKeyPair.Unmarshal(m, b)
}
func (m *SignedPublicKeyPair) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SignedPublicKeyPair.Marshal(b, m, deterministic)
}
func (m *SignedPublicKeyPair) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SignedPublicKeyPair.Merge(m, src)
}
func (m *SignedPublicKeyPair) XXX_Size() int {
	return xxx_messageInfo_SignedPublicKeyPair.Size(m)
}
func (m *SignedPublicKeyPair) XXX_DiscardUnknown() {
	xxx_messageInfo_SignedPublicKeyPair.DiscardUnknown(m)
}

var xxx_messageInfo_SignedPublicKeyPair proto.InternalMessageInfo

func (m *SignedPublicKeyPair) GetOldKey() *PublicKey {
	if m != nil {
		return m.OldKey
	}
	return nil
}

func (m *SignedPublicKeyPair) GetNewKey() *PublicKey {
	if m != nil {
		return m.NewKey
	}
	return nil
}

func (m *SignedPublicKeyPair) GetOldSignature() []byte {
	if m != nil {
		return m.OldSignature
	}
	return nil
}

func (m *SignedPublicKeyPair) GetNewSignature() []byte {
	if m != nil {
		return m.NewSignature
	}
	return nil
}

func init() {
	proto.RegisterType((*Null)(nil), "ledger.Null")
	proto.RegisterType((*PublicKey)(nil), "ledger.PublicKey")
	proto.RegisterType((*ChannelCommit)(nil), "ledger.ChannelCommit")
	proto.RegisterType((*SignedChannelCommit)(nil), "ledger.SignedChannelCommit")
	proto.RegisterType((*CreateAccountResult)(nil), "ledger.CreateAccountResult")
	proto.RegisterType((*Account)(nil), "ledger.Account")
	proto.RegisterType((*ChannelID)(nil), "ledger.ChannelID")
	proto.RegisterType((*ChannelInfo)(nil), "ledger.ChannelInfo")
	proto.RegisterType((*SignedChannelState)(nil), "ledger.SignedChannelState")
	proto.RegisterType((*ClosedChannelCursor)(nil), "ledger.ClosedChannelCursor")
	proto.RegisterType((*ChannelState)(nil), "ledger.ChannelState")
	proto.RegisterType((*ChannelClosed)(nil), "ledger.ChannelClosed")
	proto.RegisterType((*SignedPublicKeyPair)(nil), "ledger.SignedPublicKeyPair")
}

func init() { proto.RegisterFile("protos/escrow/ledger.proto", fileDescriptor_664c593717b46779) }

var fileDescriptor_664c593717b46779 = []byte{
	// 682 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x55, 0xc1, 0x6e, 0xd3, 0x40,
	0x10, 0x95, 0xed, 0x34, 0x6e, 0x26, 0x4e, 0x80, 0x4d, 0x41, 0xc1, 0x05, 0xd1, 0xba, 0xaa, 0x28,
	0x45, 0x4a, 0x50, 0xb9, 0x70, 0xa3, 0x55, 0x90, 0x4a, 0x85, 0x54, 0x45, 0x8e, 0x38, 0x47, 0x8e,
	0x77, 0x5a, 0x2c, 0x1c, 0x6f, 0xb0, 0xd7, 0x0a, 0xfd, 0x09, 0x2e, 0x88, 0x1b, 0xff, 0xc1, 0x81,
	0x9f, 0x43, 0xbb, 0xf6, 0xda, 0x89, 0xe3, 0xa0, 0xde, 0xbc, 0x6f, 0xde, 0xce, 0xce, 0x9b, 0xb7,
	0x3b, 0x06, 0x7b, 0x11, 0x33, 0xce, 0x92, 0x21, 0x26, 0x7e, 0xcc, 0x96, 0xc3, 0x10, 0xe9, 0x2d,
	0xc6, 0x03, 0x09, 0x92, 0x66, 0xb6, 0x72, 0x9a, 0xd0, 0xb8, 0x4e, 0xc3, 0xd0, 0x79, 0x0e, 0xad,
	0x71, 0x3a, 0x0b, 0x03, 0xff, 0x13, 0xde, 0x91, 0x87, 0x60, 0x7c, 0xc5, 0xbb, 0xbe, 0x76, 0xa0,
	0x9d, 0x58, 0xae, 0xf8, 0x74, 0x7e, 0x6b, 0xd0, 0x19, 0x7d, 0xf1, 0xa2, 0x08, 0xc3, 0x11, 0x9b,
	0xcf, 0x03, 0x4e, 0x5e, 0xc2, 0xce, 0xc2, 0xbb, 0xc3, 0x58, 0xb2, 0xda, 0x67, 0x8f, 0x06, 0x79,
	0xfa, 0x22, 0x8b, 0x9b, 0xc5, 0xc9, 0x10, 0x5a, 0x31, 0xfa, 0xc1, 0x22, 0xc0, 0x88, 0xf7, 0xf5,
	0x6d, 0xe4, 0x92, 0x43, 0x9e, 0x40, 0xd3, 0x9b, 0xb3, 0x34, 0xe2, 0x7d, 0xe3, 0x40, 0x3b, 0x31,
	0xdc, 0x7c, 0x45, 0x9e, 0xc2, 0xae, 0xcc, 0x38, 0x0d, 0x68, 0xbf, 0x21, 0x23, 0xa6, 0x5c, 0x5f,
	0x51, 0x87, 0x42, 0x6f, 0x12, 0xdc, 0x46, 0x48, 0xd7, 0x6b, 0x1c, 0x82, 0xe9, 0x67, 0x40, 0x5e,
	0xe5, 0x63, 0x75, 0xf0, 0x1a, 0xcf, 0x55, 0x2c, 0xf2, 0x0c, 0x5a, 0x49, 0x70, 0x1b, 0x79, 0x3c,
	0x8d, 0x51, 0xd6, 0x6a, 0xb9, 0x25, 0xe0, 0x9c, 0x43, 0x6f, 0x14, 0xa3, 0xc7, 0xf1, 0xc2, 0xf7,
	0x45, 0x45, 0x2e, 0x26, 0x69, 0xc8, 0xc9, 0x2b, 0x30, 0xbd, 0x0c, 0xc8, 0x4f, 0x79, 0xa0, 0x4e,
	0x51, 0x3c, 0x15, 0x77, 0xc6, 0x60, 0xe6, 0x18, 0x79, 0x0d, 0xa6, 0x47, 0x69, 0x8c, 0x49, 0xb2,
	0xbd, 0x83, 0x8a, 0x41, 0xfa, 0x60, 0xce, 0xbc, 0xd0, 0x8b, 0xfc, 0xac, 0x2a, 0xc3, 0x55, 0x4b,
	0x67, 0x1f, 0x5a, 0xb9, 0x96, 0xab, 0x0f, 0xa4, 0x0b, 0x7a, 0x40, 0x65, 0x3a, 0xc3, 0xd5, 0x03,
	0xea, 0xfc, 0xd5, 0xa0, 0xad, 0xa2, 0xd1, 0x0d, 0x23, 0x87, 0x45, 0x7c, 0xe5, 0xb8, 0x62, 0xbb,
	0xd8, 0x42, 0xce, 0xc0, 0xba, 0x89, 0xd9, 0x7c, 0xaa, 0x14, 0xe9, 0xf5, 0x8a, 0xda, 0x82, 0xa4,
	0xa4, 0x0c, 0x00, 0x38, 0x2b, 0x76, 0x18, 0xf5, 0x3b, 0x5a, 0x9c, 0x29, 0xfe, 0x31, 0x74, 0xfd,
	0x90, 0x25, 0x38, 0x4d, 0xf0, 0x5b, 0x8a, 0x42, 0x54, 0x66, 0x67, 0x47, 0xa2, 0x93, 0x1c, 0x74,
	0x7e, 0x68, 0x40, 0xd6, 0x5c, 0x9d, 0x70, 0x8f, 0x23, 0x19, 0x54, 0x4d, 0xdd, 0xab, 0x28, 0x91,
	0xb4, 0xd2, 0xd3, 0x63, 0xe8, 0x4a, 0x45, 0x55, 0x63, 0x3b, 0x02, 0x9d, 0x28, 0x90, 0x1c, 0x82,
	0xc5, 0xd9, 0x0a, 0xc9, 0x90, 0xa4, 0x36, 0x67, 0x05, 0xc5, 0x41, 0xe8, 0x8d, 0x44, 0x85, 0xc5,
	0x2d, 0x4b, 0xe3, 0x84, 0xc5, 0xf7, 0x7f, 0x09, 0x9b, 0xba, 0xf5, 0x3a, 0xdd, 0x3f, 0x35, 0xb0,
	0xd6, 0x14, 0xdf, 0xc3, 0x36, 0x1b, 0x76, 0x2b, 0x49, 0x8b, 0x35, 0x39, 0x82, 0x86, 0x90, 0xba,
	0xcd, 0x18, 0x19, 0x24, 0x2f, 0x40, 0xe7, 0x4c, 0xfa, 0x50, 0x43, 0xd1, 0x39, 0x73, 0x2e, 0xca,
	0x01, 0x20, 0x7b, 0x40, 0xde, 0xc0, 0x4e, 0x22, 0xca, 0xcb, 0x0b, 0xb3, 0xd5, 0xa6, 0x4d, 0xcb,
	0xdc, 0x8c, 0xe8, 0xfc, 0xd1, 0xd4, 0x33, 0x2d, 0x5a, 0x33, 0xf6, 0x82, 0x98, 0x9c, 0x82, 0xc9,
	0x42, 0x3a, 0x55, 0x23, 0xa7, 0xb6, 0x85, 0x4d, 0x16, 0x52, 0x31, 0x9a, 0x4e, 0xc1, 0x8c, 0x70,
	0x29, 0xb9, 0x5b, 0x67, 0x49, 0x33, 0xc2, 0xa5, 0xe0, 0x1e, 0x41, 0x47, 0xe4, 0xad, 0x7a, 0x6a,
	0xb1, 0x90, 0x96, 0xbe, 0x1f, 0x41, 0x47, 0x24, 0x2c, 0x49, 0x8d, 0x8c, 0x14, 0xe1, 0xb2, 0x20,
	0x9d, 0xfd, 0x32, 0x60, 0x37, 0x57, 0x94, 0x90, 0xf7, 0xd0, 0xc9, 0xc6, 0x40, 0x8e, 0x90, 0xfd,
	0x5a, 0xe9, 0xd9, 0x6c, 0xb1, 0x37, 0x0d, 0x23, 0xef, 0xa0, 0x7b, 0x89, 0x7c, 0xf5, 0x61, 0x6e,
	0x92, 0xec, 0x5e, 0x15, 0x12, 0xbc, 0x0b, 0xb0, 0x64, 0xf7, 0xd5, 0xc9, 0xff, 0x69, 0xba, 0xbd,
	0x31, 0xeb, 0x32, 0xdb, 0x3e, 0xc2, 0xde, 0x25, 0xf2, 0x6b, 0xfc, 0xce, 0xd7, 0xee, 0x72, 0x29,
	0xa2, 0xe6, 0x8a, 0xd7, 0x17, 0x53, 0xf4, 0x41, 0xbd, 0xeb, 0x4d, 0x2b, 0xec, 0x32, 0x6b, 0xcd,
	0xe0, 0x3c, 0x87, 0xde, 0xe7, 0x05, 0x2d, 0xe1, 0x71, 0x3a, 0x13, 0xb6, 0x55, 0xda, 0xb9, 0x76,
	0x57, 0x6c, 0x4b, 0x05, 0xc5, 0x5f, 0x6b, 0xd6, 0x94, 0x3f, 0xb3, 0xb7, 0xff, 0x02, 0x00, 0x00,
	0xff, 0xff, 0x56, 0x5f, 0x0d, 0xe1, 0xea, 0x06, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ChannelsClient is the client API for Channels service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ChannelsClient interface {
	// Creates a channel on the ledger and returns the ID of the ledger
	CreateChannel(ctx context.Context, in *SignedChannelCommit, opts ...grpc.CallOption) (*ChannelID, error)
	// Retrieves the state of a channel on the ledger.
	GetChannelInfo(ctx context.Context, in *ChannelID, opts ...grpc.CallOption) (*ChannelInfo, error)
	// Closes a channel on the ledger.
	CloseChannel(ctx context.Context, in *SignedChannelState, opts ...grpc.CallOption) (*ChannelClosed, error)
	// Retrieves the state of the next closed channel with the given payer
	// returns OUT_OF_RANGE status if there are no more closed channels
	GetNextClosedChannel(ctx context.Context, in *ClosedChannelCursor, opts ...grpc.CallOption) (*ChannelInfo, error)
	// Create an account and return
	CreateAccount(ctx context.Context, in *PublicKey, opts ...grpc.CallOption) (*CreateAccountResult, error)
	// Update an account pub key (BIP 44 compatible)
	UpdateAccountPubKey(ctx context.Context, in *SignedPublicKeyPair, opts ...grpc.CallOption) (*Null, error)
}

type channelsClient struct {
	cc *grpc.ClientConn
}

func NewChannelsClient(cc *grpc.ClientConn) ChannelsClient {
	return &channelsClient{cc}
}

func (c *channelsClient) CreateChannel(ctx context.Context, in *SignedChannelCommit, opts ...grpc.CallOption) (*ChannelID, error) {
	out := new(ChannelID)
	err := c.cc.Invoke(ctx, "/ledger.Channels/CreateChannel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *channelsClient) GetChannelInfo(ctx context.Context, in *ChannelID, opts ...grpc.CallOption) (*ChannelInfo, error) {
	out := new(ChannelInfo)
	err := c.cc.Invoke(ctx, "/ledger.Channels/GetChannelInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *channelsClient) CloseChannel(ctx context.Context, in *SignedChannelState, opts ...grpc.CallOption) (*ChannelClosed, error) {
	out := new(ChannelClosed)
	err := c.cc.Invoke(ctx, "/ledger.Channels/CloseChannel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *channelsClient) GetNextClosedChannel(ctx context.Context, in *ClosedChannelCursor, opts ...grpc.CallOption) (*ChannelInfo, error) {
	out := new(ChannelInfo)
	err := c.cc.Invoke(ctx, "/ledger.Channels/GetNextClosedChannel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *channelsClient) CreateAccount(ctx context.Context, in *PublicKey, opts ...grpc.CallOption) (*CreateAccountResult, error) {
	out := new(CreateAccountResult)
	err := c.cc.Invoke(ctx, "/ledger.Channels/CreateAccount", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *channelsClient) UpdateAccountPubKey(ctx context.Context, in *SignedPublicKeyPair, opts ...grpc.CallOption) (*Null, error) {
	out := new(Null)
	err := c.cc.Invoke(ctx, "/ledger.Channels/UpdateAccountPubKey", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ChannelsServer is the server API for Channels service.
type ChannelsServer interface {
	// Creates a channel on the ledger and returns the ID of the ledger
	CreateChannel(context.Context, *SignedChannelCommit) (*ChannelID, error)
	// Retrieves the state of a channel on the ledger.
	GetChannelInfo(context.Context, *ChannelID) (*ChannelInfo, error)
	// Closes a channel on the ledger.
	CloseChannel(context.Context, *SignedChannelState) (*ChannelClosed, error)
	// Retrieves the state of the next closed channel with the given payer
	// returns OUT_OF_RANGE status if there are no more closed channels
	GetNextClosedChannel(context.Context, *ClosedChannelCursor) (*ChannelInfo, error)
	// Create an account and return
	CreateAccount(context.Context, *PublicKey) (*CreateAccountResult, error)
	// Update an account pub key (BIP 44 compatible)
	UpdateAccountPubKey(context.Context, *SignedPublicKeyPair) (*Null, error)
}

// UnimplementedChannelsServer can be embedded to have forward compatible implementations.
type UnimplementedChannelsServer struct {
}

func (*UnimplementedChannelsServer) CreateChannel(ctx context.Context, req *SignedChannelCommit) (*ChannelID, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateChannel not implemented")
}
func (*UnimplementedChannelsServer) GetChannelInfo(ctx context.Context, req *ChannelID) (*ChannelInfo, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetChannelInfo not implemented")
}
func (*UnimplementedChannelsServer) CloseChannel(ctx context.Context, req *SignedChannelState) (*ChannelClosed, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CloseChannel not implemented")
}
func (*UnimplementedChannelsServer) GetNextClosedChannel(ctx context.Context, req *ClosedChannelCursor) (*ChannelInfo, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNextClosedChannel not implemented")
}
func (*UnimplementedChannelsServer) CreateAccount(ctx context.Context, req *PublicKey) (*CreateAccountResult, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateAccount not implemented")
}
func (*UnimplementedChannelsServer) UpdateAccountPubKey(ctx context.Context, req *SignedPublicKeyPair) (*Null, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateAccountPubKey not implemented")
}

func RegisterChannelsServer(s *grpc.Server, srv ChannelsServer) {
	s.RegisterService(&_Channels_serviceDesc, srv)
}

func _Channels_CreateChannel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SignedChannelCommit)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChannelsServer).CreateChannel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ledger.Channels/CreateChannel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChannelsServer).CreateChannel(ctx, req.(*SignedChannelCommit))
	}
	return interceptor(ctx, in, info, handler)
}

func _Channels_GetChannelInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ChannelID)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChannelsServer).GetChannelInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ledger.Channels/GetChannelInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChannelsServer).GetChannelInfo(ctx, req.(*ChannelID))
	}
	return interceptor(ctx, in, info, handler)
}

func _Channels_CloseChannel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SignedChannelState)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChannelsServer).CloseChannel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ledger.Channels/CloseChannel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChannelsServer).CloseChannel(ctx, req.(*SignedChannelState))
	}
	return interceptor(ctx, in, info, handler)
}

func _Channels_GetNextClosedChannel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ClosedChannelCursor)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChannelsServer).GetNextClosedChannel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ledger.Channels/GetNextClosedChannel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChannelsServer).GetNextClosedChannel(ctx, req.(*ClosedChannelCursor))
	}
	return interceptor(ctx, in, info, handler)
}

func _Channels_CreateAccount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PublicKey)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChannelsServer).CreateAccount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ledger.Channels/CreateAccount",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChannelsServer).CreateAccount(ctx, req.(*PublicKey))
	}
	return interceptor(ctx, in, info, handler)
}

func _Channels_UpdateAccountPubKey_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SignedPublicKeyPair)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChannelsServer).UpdateAccountPubKey(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ledger.Channels/UpdateAccountPubKey",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChannelsServer).UpdateAccountPubKey(ctx, req.(*SignedPublicKeyPair))
	}
	return interceptor(ctx, in, info, handler)
}

var _Channels_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ledger.Channels",
	HandlerType: (*ChannelsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateChannel",
			Handler:    _Channels_CreateChannel_Handler,
		},
		{
			MethodName: "GetChannelInfo",
			Handler:    _Channels_GetChannelInfo_Handler,
		},
		{
			MethodName: "CloseChannel",
			Handler:    _Channels_CloseChannel_Handler,
		},
		{
			MethodName: "GetNextClosedChannel",
			Handler:    _Channels_GetNextClosedChannel_Handler,
		},
		{
			MethodName: "CreateAccount",
			Handler:    _Channels_CreateAccount_Handler,
		},
		{
			MethodName: "UpdateAccountPubKey",
			Handler:    _Channels_UpdateAccountPubKey_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "protos/escrow/ledger.proto",
}
