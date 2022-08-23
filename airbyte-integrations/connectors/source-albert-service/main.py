#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#


import sys

from airbyte_cdk.entrypoint import launch
from source_albert_service import SourceAlbertService

if __name__ == "__main__":
    source = SourceAlbertService()
    launch(source, sys.argv[1:])
