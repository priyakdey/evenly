.PHONY:all teardown setup
all: teardown setup 

setup:
	docker-compose -f stack.yml up --build -d

teardown:
	docker-compose -f stack.yml down -v
