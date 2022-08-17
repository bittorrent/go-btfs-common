package grpc

import (
	"context"
	"github.com/bittorrent/go-btfs-common/protos/score"
)

func ScoreClient(addr string) *ScoreClientBuilder {
	return &ScoreClientBuilder{builder(addr)}
}

type ScoreClientBuilder struct {
	ClientBuilder
}

func (g *ScoreClientBuilder) WithContext(ctx context.Context, f func(ctx context.Context,
	client score.ScoreServiceServer) error) error {
	return g.doWithContext(ctx, f)
}
