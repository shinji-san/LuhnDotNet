// ----------------------------------------------------------------------------
// <copyright file="AntisymmetricQuasiGroup.cs" company="Private">
// Copyright (c) 2025 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>06/09/2025 17:22:02 PM</date>
// ----------------------------------------------------------------------------

#region License

// ----------------------------------------------------------------------------
// Copyright 2025 Sebastian Walther
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

#endregion

namespace LuhnDotNet.Algorithm.Damm;

using System;
using System.Linq;

/// <summary>
/// Represents a mathematical structure known as an antisymmetric quasigroup.
/// The antisymmetric quasigroup is often used in error detection algorithms,
/// such as the Damm algorithm, for verifying and generating check digits.
/// </summary>
public class AntisymmetricQuasiGroup
{
    private const int Dimension = 10;
    private readonly uint[,] table;

    /// <summary>
    /// Represents an antisymmetric quasigroup used in certain error detection algorithms, such as the Damm algorithm.
    /// </summary>
    /// <param name="table">A jagged array representing the antisymmetric quasigroup.</param>
    /// <exception cref="ArgumentException">Thrown if the provided table is not a valid 10x10 antisymmetric quasigroup matrix.</exception>
    private AntisymmetricQuasiGroup(uint[,] table)
    {
        if (table.GetLength(0) != Dimension || table.GetLength(1) != Dimension)
        {
            throw new ArgumentException($"The antisymmetric quasigroup must be a {Dimension}x{Dimension} matrix.", nameof(table));
        }

        this.table = table;
    }

    /// <summary>
    /// Represents an antisymmetric quasigroup used in certain error detection algorithms, such as the Damm algorithm.
    /// </summary>
    /// <param name="table">A two-dimensional array representing the antisymmetric quasigroup.</param>
    /// <exception cref="ArgumentException">Thrown if the provided table is not a valid 10x10 antisymmetric quasigroup matrix.</exception>
    private AntisymmetricQuasiGroup(uint[][] table)
    {
        if (table.Length != Dimension || table.Any(row => row.Length != Dimension))
        {
            throw new ArgumentException($"The antisymmetric quasigroup must be a {Dimension}x{Dimension} matrix.", nameof(table));
        }

        this.table = new uint[Dimension, Dimension];
        for (int i = 0; i < Dimension; i++)
        {
            for (int j = 0; j < Dimension; j++)
            {
                this.table[i, j] = table[i][j];
            }
        }
    }

    /// <summary>
    /// Represents an antisymmetric quasigroup used in certain error detection algorithms, such as the Damm algorithm.
    /// </summary>
    /// <param name="table">A jagged array representing the antisymmetric quasigroup.</param>
    /// <exception cref="ArgumentException">Thrown if the provided table is not a valid 10x10 antisymmetric quasigroup matrix.</exception>
    private AntisymmetricQuasiGroup(int[,] table)
    {
        if (table.GetLength(0) != Dimension || table.GetLength(1) != Dimension)
        {
            throw new ArgumentException($"The antisymmetric quasigroup must be a {Dimension}x{Dimension} matrix.", nameof(table));
        }

        this.table = new uint[Dimension, Dimension];
        for (int i = 0; i < Dimension; i++)
        {
            for (int j = 0; j < Dimension; j++)
            {
                this.table[i, j] = (uint)table[i, j];
            }
        }
    }

    /// <summary>
    /// Represents an antisymmetric quasigroup used in certain error detection algorithms, such as the Damm algorithm.
    /// </summary>
    /// <param name="table">A two-dimensional array representing the antisymmetric quasigroup.</param>
    /// <exception cref="ArgumentException">Thrown if the provided table is not a valid 10x10 antisymmetric quasigroup matrix.</exception>
    private AntisymmetricQuasiGroup(int[][] table)
    {
        if (table.Length != Dimension || table.Any(row => row.Length != Dimension))
        {
            throw new ArgumentException($"The antisymmetric quasigroup must be a {Dimension}x{Dimension} matrix.", nameof(table));
        }

        this.table = new uint[Dimension, Dimension];
        for (int i = 0; i < Dimension; i++)
        {
            for (int j = 0; j < Dimension; j++)
            {
                this.table[i, j] = (uint)table[i][j];
            }
        }
    }

    /// <summary>
    /// Indexer that provides access to elements in the antisymmetric quasigroup table
    /// using integer indices.
    /// </summary>
    /// <param name="i">The row index of the table.</param>
    /// <param name="j">The column index of the table.</param>
    /// <returns>The value at the specified row and column indices in the table.</returns>
    /// <exception cref="IndexOutOfRangeException">
    /// Thrown if the specified indices are out of bounds of the table.
    /// </exception>
    public int this[int i, int j] => (int)this.table[i, j];
    
    /// <summary>
    /// Indexer that provides access to elements in the antisymmetric quasigroup table
    /// using unsigned integer indices.
    /// </summary>
    /// <param name="i">The row index of the table.</param>
    /// <param name="j">The column index of the table.</param>
    /// <returns>The value at the specified row and column indices in the table.</returns>
    /// <exception cref="IndexOutOfRangeException">
    /// Thrown if the specified indices are outside the valid bounds of the table.
    /// </exception>
    [CLSCompliant(false)]
    public uint this[uint i, uint j] => this.table[i, j];

    /// <summary>
    /// Defines an implicit conversion from a two-dimensional array of unsigned integers
    /// to an instance of <see cref="AntisymmetricQuasiGroup"/>.
    /// </summary>
    /// <param name="table">A two-dimensional array of unsigned integers representing the antisymmetric quasigroup.</param>
    /// <returns>An instance of <see cref="AntisymmetricQuasiGroup"/> initialized with the provided table.</returns>
    /// <exception cref="ArgumentException">Thrown if the provided table is not a valid 10x10 antisymmetric quasigroup matrix.</exception>
    [CLSCompliant(false)]
    public static implicit operator AntisymmetricQuasiGroup(uint[,] table) => new AntisymmetricQuasiGroup(table);

    /// <summary>
    /// Defines an implicit conversion from a jagged array of unsigned integers
    /// to an instance of <see cref="AntisymmetricQuasiGroup"/>.
    /// </summary>
    /// <param name="table">A jagged array of unsigned integers representing the antisymmetric quasigroup.</param>
    /// <returns>An instance of <see cref="AntisymmetricQuasiGroup"/> initialized with the provided table.</returns>
    /// <exception cref="ArgumentException">Thrown if the provided table is not a valid 10x10 antisymmetric quasigroup matrix.</exception>
    [CLSCompliant(false)]
    public static implicit operator AntisymmetricQuasiGroup(uint[][] table) => new AntisymmetricQuasiGroup(table);

    /// <summary>
    /// Defines an implicit conversion from a two-dimensional array of signed integers
    /// to an instance of <see cref="AntisymmetricQuasiGroup"/>.
    /// </summary>
    /// <param name="table">A two-dimensional array of signed integers representing the antisymmetric quasigroup.</param>
    /// <returns>An instance of <see cref="AntisymmetricQuasiGroup"/> initialized with the provided table.</returns>
    /// <exception cref="ArgumentException">Thrown if the provided table is not a valid 10x10 antisymmetric quasigroup matrix.</exception>
    public static implicit operator AntisymmetricQuasiGroup(int[,] table) => new AntisymmetricQuasiGroup(table);

    /// <summary>
    /// Defines an implicit conversion from a jagged array of integers
    /// to an instance of <see cref="AntisymmetricQuasiGroup"/>.
    /// </summary>
    /// <param name="table">A jagged array of integers representing the antisymmetric quasigroup.</param>
    /// <returns>An instance of <see cref="AntisymmetricQuasiGroup"/> initialized with the provided table.</returns>
    /// <exception cref="ArgumentException">Thrown if the provided table is not a valid 10x10 antisymmetric quasigroup matrix.</exception>
    [CLSCompliant(false)]
    public static implicit operator AntisymmetricQuasiGroup(int[][] table) => new AntisymmetricQuasiGroup(table);
} 