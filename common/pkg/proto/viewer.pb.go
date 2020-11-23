// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.12.3
// source: pkg/proto/viewer.proto

package proto

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Viewer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Spice []*Viewer_Spice `protobuf:"bytes,1,rep,name=spice,proto3" json:"spice,omitempty"`
	Vnc   []*Viewer_Vnc   `protobuf:"bytes,2,rep,name=vnc,proto3" json:"vnc,omitempty"`
}

func (x *Viewer) Reset() {
	*x = Viewer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_viewer_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Viewer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Viewer) ProtoMessage() {}

func (x *Viewer) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_viewer_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Viewer.ProtoReflect.Descriptor instead.
func (*Viewer) Descriptor() ([]byte, []int) {
	return file_pkg_proto_viewer_proto_rawDescGZIP(), []int{0}
}

func (x *Viewer) GetSpice() []*Viewer_Spice {
	if x != nil {
		return x.Spice
	}
	return nil
}

func (x *Viewer) GetVnc() []*Viewer_Vnc {
	if x != nil {
		return x.Vnc
	}
	return nil
}

type Viewer_Spice struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pwd     string `protobuf:"bytes,1,opt,name=pwd,proto3" json:"pwd,omitempty"`
	Port    int32  `protobuf:"varint,2,opt,name=port,proto3" json:"port,omitempty"`
	TlsPort int32  `protobuf:"varint,3,opt,name=tls_port,json=tlsPort,proto3" json:"tls_port,omitempty"`
}

func (x *Viewer_Spice) Reset() {
	*x = Viewer_Spice{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_viewer_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Viewer_Spice) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Viewer_Spice) ProtoMessage() {}

func (x *Viewer_Spice) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_viewer_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Viewer_Spice.ProtoReflect.Descriptor instead.
func (*Viewer_Spice) Descriptor() ([]byte, []int) {
	return file_pkg_proto_viewer_proto_rawDescGZIP(), []int{0, 0}
}

func (x *Viewer_Spice) GetPwd() string {
	if x != nil {
		return x.Pwd
	}
	return ""
}

func (x *Viewer_Spice) GetPort() int32 {
	if x != nil {
		return x.Port
	}
	return 0
}

func (x *Viewer_Spice) GetTlsPort() int32 {
	if x != nil {
		return x.TlsPort
	}
	return 0
}

type Viewer_Vnc struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pwd           string `protobuf:"bytes,1,opt,name=pwd,proto3" json:"pwd,omitempty"`
	Port          int32  `protobuf:"varint,2,opt,name=port,proto3" json:"port,omitempty"`
	WebsocketPort int32  `protobuf:"varint,3,opt,name=websocket_port,json=websocketPort,proto3" json:"websocket_port,omitempty"`
}

func (x *Viewer_Vnc) Reset() {
	*x = Viewer_Vnc{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_viewer_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Viewer_Vnc) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Viewer_Vnc) ProtoMessage() {}

func (x *Viewer_Vnc) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_viewer_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Viewer_Vnc.ProtoReflect.Descriptor instead.
func (*Viewer_Vnc) Descriptor() ([]byte, []int) {
	return file_pkg_proto_viewer_proto_rawDescGZIP(), []int{0, 1}
}

func (x *Viewer_Vnc) GetPwd() string {
	if x != nil {
		return x.Pwd
	}
	return ""
}

func (x *Viewer_Vnc) GetPort() int32 {
	if x != nil {
		return x.Port
	}
	return 0
}

func (x *Viewer_Vnc) GetWebsocketPort() int32 {
	if x != nil {
		return x.WebsocketPort
	}
	return 0
}

var File_pkg_proto_viewer_proto protoreflect.FileDescriptor

var file_pkg_proto_viewer_proto_rawDesc = []byte{
	0x0a, 0x16, 0x70, 0x6b, 0x67, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x76, 0x69, 0x65, 0x77,
	0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x20, 0x63, 0x6f, 0x6d, 0x2e, 0x67, 0x69,
	0x74, 0x6c, 0x61, 0x62, 0x2e, 0x69, 0x73, 0x61, 0x72, 0x64, 0x2e, 0x69, 0x73, 0x61, 0x72, 0x64,
	0x76, 0x64, 0x69, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x22, 0xac, 0x02, 0x0a, 0x06, 0x56,
	0x69, 0x65, 0x77, 0x65, 0x72, 0x12, 0x44, 0x0a, 0x05, 0x73, 0x70, 0x69, 0x63, 0x65, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x2e, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x67, 0x69, 0x74, 0x6c, 0x61,
	0x62, 0x2e, 0x69, 0x73, 0x61, 0x72, 0x64, 0x2e, 0x69, 0x73, 0x61, 0x72, 0x64, 0x76, 0x64, 0x69,
	0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x65, 0x72, 0x2e, 0x53,
	0x70, 0x69, 0x63, 0x65, 0x52, 0x05, 0x73, 0x70, 0x69, 0x63, 0x65, 0x12, 0x3e, 0x0a, 0x03, 0x76,
	0x6e, 0x63, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2c, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x67,
	0x69, 0x74, 0x6c, 0x61, 0x62, 0x2e, 0x69, 0x73, 0x61, 0x72, 0x64, 0x2e, 0x69, 0x73, 0x61, 0x72,
	0x64, 0x76, 0x64, 0x69, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x56, 0x69, 0x65, 0x77,
	0x65, 0x72, 0x2e, 0x56, 0x6e, 0x63, 0x52, 0x03, 0x76, 0x6e, 0x63, 0x1a, 0x48, 0x0a, 0x05, 0x53,
	0x70, 0x69, 0x63, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x70, 0x77, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x70, 0x77, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x74, 0x6c,
	0x73, 0x5f, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x07, 0x74, 0x6c,
	0x73, 0x50, 0x6f, 0x72, 0x74, 0x1a, 0x52, 0x0a, 0x03, 0x56, 0x6e, 0x63, 0x12, 0x10, 0x0a, 0x03,
	0x70, 0x77, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x70, 0x77, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x70, 0x6f,
	0x72, 0x74, 0x12, 0x25, 0x0a, 0x0e, 0x77, 0x65, 0x62, 0x73, 0x6f, 0x63, 0x6b, 0x65, 0x74, 0x5f,
	0x70, 0x6f, 0x72, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0d, 0x77, 0x65, 0x62, 0x73,
	0x6f, 0x63, 0x6b, 0x65, 0x74, 0x50, 0x6f, 0x72, 0x74, 0x42, 0x2c, 0x5a, 0x2a, 0x67, 0x69, 0x74,
	0x6c, 0x61, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x69, 0x73, 0x61, 0x72, 0x64, 0x2f, 0x69, 0x73,
	0x61, 0x72, 0x64, 0x76, 0x64, 0x69, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x70, 0x6b,
	0x67, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pkg_proto_viewer_proto_rawDescOnce sync.Once
	file_pkg_proto_viewer_proto_rawDescData = file_pkg_proto_viewer_proto_rawDesc
)

func file_pkg_proto_viewer_proto_rawDescGZIP() []byte {
	file_pkg_proto_viewer_proto_rawDescOnce.Do(func() {
		file_pkg_proto_viewer_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_proto_viewer_proto_rawDescData)
	})
	return file_pkg_proto_viewer_proto_rawDescData
}

var file_pkg_proto_viewer_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_pkg_proto_viewer_proto_goTypes = []interface{}{
	(*Viewer)(nil),       // 0: com.gitlab.isard.isardvdi.common.Viewer
	(*Viewer_Spice)(nil), // 1: com.gitlab.isard.isardvdi.common.Viewer.Spice
	(*Viewer_Vnc)(nil),   // 2: com.gitlab.isard.isardvdi.common.Viewer.Vnc
}
var file_pkg_proto_viewer_proto_depIdxs = []int32{
	1, // 0: com.gitlab.isard.isardvdi.common.Viewer.spice:type_name -> com.gitlab.isard.isardvdi.common.Viewer.Spice
	2, // 1: com.gitlab.isard.isardvdi.common.Viewer.vnc:type_name -> com.gitlab.isard.isardvdi.common.Viewer.Vnc
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_pkg_proto_viewer_proto_init() }
func file_pkg_proto_viewer_proto_init() {
	if File_pkg_proto_viewer_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pkg_proto_viewer_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Viewer); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_proto_viewer_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Viewer_Spice); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_proto_viewer_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Viewer_Vnc); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pkg_proto_viewer_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pkg_proto_viewer_proto_goTypes,
		DependencyIndexes: file_pkg_proto_viewer_proto_depIdxs,
		MessageInfos:      file_pkg_proto_viewer_proto_msgTypes,
	}.Build()
	File_pkg_proto_viewer_proto = out.File
	file_pkg_proto_viewer_proto_rawDesc = nil
	file_pkg_proto_viewer_proto_goTypes = nil
	file_pkg_proto_viewer_proto_depIdxs = nil
}