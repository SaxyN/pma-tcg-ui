import React from 'react';
import { GridColDef } from "@mui/x-data-grid";
import { GridRarityCell } from './GridRarityCell';
import { Button } from '@mui/material';

export const columns: GridColDef[] = [
    // {
    //     field: '', renderCell(params) {
    //         return (<Button size="small" onClick={() => onCellClick(params.row)} sx={{ color: "white", backgroundColor: "gray", '&:hover': { backgroundColor: "orange" } }}>View</Button>
    //         )
    //     }
    // },
    {
        field: 'uid', headerName: 'UID', width: 180, renderCell(params) {
            return (<p>{params.row.uid}</p>)
        },
    },
    {
        field: 'type', headerName: 'Rarity', width: 120, renderCell(params) {
            return (<GridRarityCell rarity={params.row.type} />)
        },
    },
    { field: 'name', headerName: 'Name', width: 160 },
    {
        field: 'pattern', headerName: 'Pattern', width: 90, renderCell(params) {
            if (params.row.pattern === '') {
                return "None";
            }
        },
    },
    {
        field: 'holoX', headerName: 'HoloX', width: 60, renderCell(params) {
            if (params.row.pattern === '') {
                return "0%";
            }
        }
    },
    {
        field: 'holoY', headerName: 'HoloY', width: 60, renderCell(params) {
            if (params.row.pattern === '') {
                return "0%";
            }
        }
    },
]