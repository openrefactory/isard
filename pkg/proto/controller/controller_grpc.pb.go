// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package controller

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// ControllerClient is the client API for Controller service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ControllerClient interface {
	DesktopList(ctx context.Context, in *DesktopListRequest, opts ...grpc.CallOption) (*DesktopListResponse, error)
	DesktopStart(ctx context.Context, in *DesktopStartRequest, opts ...grpc.CallOption) (*DesktopStartResponse, error)
	DesktopStop(ctx context.Context, in *DesktopStopRequest, opts ...grpc.CallOption) (*DesktopStopResponse, error)
	ViewerGet(ctx context.Context, in *ViewerGetRequest, opts ...grpc.CallOption) (*ViewerGetResponse, error)
}

type controllerClient struct {
	cc grpc.ClientConnInterface
}

func NewControllerClient(cc grpc.ClientConnInterface) ControllerClient {
	return &controllerClient{cc}
}

func (c *controllerClient) DesktopList(ctx context.Context, in *DesktopListRequest, opts ...grpc.CallOption) (*DesktopListResponse, error) {
	out := new(DesktopListResponse)
	err := c.cc.Invoke(ctx, "/com.gitlab.isard.isardvdi.controller.Controller/DesktopList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *controllerClient) DesktopStart(ctx context.Context, in *DesktopStartRequest, opts ...grpc.CallOption) (*DesktopStartResponse, error) {
	out := new(DesktopStartResponse)
	err := c.cc.Invoke(ctx, "/com.gitlab.isard.isardvdi.controller.Controller/DesktopStart", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *controllerClient) DesktopStop(ctx context.Context, in *DesktopStopRequest, opts ...grpc.CallOption) (*DesktopStopResponse, error) {
	out := new(DesktopStopResponse)
	err := c.cc.Invoke(ctx, "/com.gitlab.isard.isardvdi.controller.Controller/DesktopStop", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *controllerClient) ViewerGet(ctx context.Context, in *ViewerGetRequest, opts ...grpc.CallOption) (*ViewerGetResponse, error) {
	out := new(ViewerGetResponse)
	err := c.cc.Invoke(ctx, "/com.gitlab.isard.isardvdi.controller.Controller/ViewerGet", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ControllerServer is the server API for Controller service.
// All implementations must embed UnimplementedControllerServer
// for forward compatibility
type ControllerServer interface {
	DesktopList(context.Context, *DesktopListRequest) (*DesktopListResponse, error)
	DesktopStart(context.Context, *DesktopStartRequest) (*DesktopStartResponse, error)
	DesktopStop(context.Context, *DesktopStopRequest) (*DesktopStopResponse, error)
	ViewerGet(context.Context, *ViewerGetRequest) (*ViewerGetResponse, error)
	mustEmbedUnimplementedControllerServer()
}

// UnimplementedControllerServer must be embedded to have forward compatible implementations.
type UnimplementedControllerServer struct {
}

func (UnimplementedControllerServer) DesktopList(context.Context, *DesktopListRequest) (*DesktopListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DesktopList not implemented")
}
func (UnimplementedControllerServer) DesktopStart(context.Context, *DesktopStartRequest) (*DesktopStartResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DesktopStart not implemented")
}
func (UnimplementedControllerServer) DesktopStop(context.Context, *DesktopStopRequest) (*DesktopStopResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DesktopStop not implemented")
}
func (UnimplementedControllerServer) ViewerGet(context.Context, *ViewerGetRequest) (*ViewerGetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ViewerGet not implemented")
}
func (UnimplementedControllerServer) mustEmbedUnimplementedControllerServer() {}

// UnsafeControllerServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ControllerServer will
// result in compilation errors.
type UnsafeControllerServer interface {
	mustEmbedUnimplementedControllerServer()
}

func RegisterControllerServer(s *grpc.Server, srv ControllerServer) {
	s.RegisterService(&_Controller_serviceDesc, srv)
}

func _Controller_DesktopList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DesktopListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ControllerServer).DesktopList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/com.gitlab.isard.isardvdi.controller.Controller/DesktopList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ControllerServer).DesktopList(ctx, req.(*DesktopListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Controller_DesktopStart_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DesktopStartRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ControllerServer).DesktopStart(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/com.gitlab.isard.isardvdi.controller.Controller/DesktopStart",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ControllerServer).DesktopStart(ctx, req.(*DesktopStartRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Controller_DesktopStop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DesktopStopRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ControllerServer).DesktopStop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/com.gitlab.isard.isardvdi.controller.Controller/DesktopStop",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ControllerServer).DesktopStop(ctx, req.(*DesktopStopRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Controller_ViewerGet_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ViewerGetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ControllerServer).ViewerGet(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/com.gitlab.isard.isardvdi.controller.Controller/ViewerGet",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ControllerServer).ViewerGet(ctx, req.(*ViewerGetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Controller_serviceDesc = grpc.ServiceDesc{
	ServiceName: "com.gitlab.isard.isardvdi.controller.Controller",
	HandlerType: (*ControllerServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DesktopList",
			Handler:    _Controller_DesktopList_Handler,
		},
		{
			MethodName: "DesktopStart",
			Handler:    _Controller_DesktopStart_Handler,
		},
		{
			MethodName: "DesktopStop",
			Handler:    _Controller_DesktopStop_Handler,
		},
		{
			MethodName: "ViewerGet",
			Handler:    _Controller_ViewerGet_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/controller/controller.proto",
}
