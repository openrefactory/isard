// Code generated by protoc-gen-go-grpc-mock (https://github.com/nefixestrada/protoc-gen-go-grpc-mock). DO NOT EDIT.
// version: v0.2.0

package proto

import (
	context "context"
	mock "github.com/stretchr/testify/mock"
	grpc "google.golang.org/grpc"
	net "net"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// NewOrchestratorServiceMock creates and starts a Orchestrator service mock.
// it returns the mock and a client for the
func NewOrchestratorServiceMock() (*OrchestratorServiceMock, OrchestratorClient, error) {
	addr, err := net.ResolveTCPAddr("tcp", "localhost:0")
	if err != nil {
		return nil, nil, err
	}

	lis, err := net.ListenTCP("tcp", addr)
	if err != nil {
		return nil, nil, err
	}

	s := grpc.NewServer()
	m := &OrchestratorServiceMock{server: s}

	RegisterOrchestratorServer(s, m)

	go s.Serve(lis)

	cc, err := grpc.Dial(lis.Addr().String(), grpc.WithInsecure())
	if err != nil {
		return nil, nil, err
	}
	m.cc = cc

	cli := NewOrchestratorClient(cc)

	return m, cli, nil
}

// OrchestratorServiceMock is a mock for the OrchestratorService service.
type OrchestratorServiceMock struct {
	mock.Mock
	server *grpc.Server
	cc     *grpc.ClientConn
	UnimplementedOrchestratorServer
}

func (m *OrchestratorServiceMock) Stop() {
	m.cc.Close()
	m.server.Stop()
}

const GetHyper = "GetHyper"

func (m *OrchestratorServiceMock) GetHyper(ctx context.Context, in *GetHyperRequest) (*GetHyperResponse, error) {
	args := m.Called(ctx, in)
	return args.Get(0).(*GetHyperResponse), args.Error(1)
}
