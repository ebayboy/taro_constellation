#!/bin/bash

#yarn dev:weapp


if [ "$1" == "Release" ]; then
	cmd="taro build --type weapp"
else
	cmd="taro build --type weapp --watch"
fi

echo "cmd=${cmd}"

eval $cmd
