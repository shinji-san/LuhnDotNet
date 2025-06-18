using LuhnDotNet.Algorithm.Damm;
using System;

namespace LuhnDotNetTest.Algorithm.Damm;

using System.Linq;
using Xunit;

public class AntisymmetricQuasiGroupTest
{
    private static readonly int[,] IntegerQuasiGroupTable = new int[10, 10]
    {
        {0, 3, 1, 7, 5, 9, 8, 6, 4, 2},
        {7, 0, 9, 2, 1, 5, 4, 8, 6, 3},
        {4, 2, 0, 6, 8, 7, 1, 3, 5, 9},
        {1, 7, 5, 0, 9, 8, 3, 4, 2, 6},
        {6, 1, 2, 3, 0, 4, 5, 9, 7, 8},
        {3, 6, 7, 4, 2, 0, 9, 5, 8, 1},
        {5, 8, 6, 9, 7, 2, 0, 1, 3, 4},
        {8, 9, 4, 5, 3, 6, 2, 0, 1, 7},
        {9, 4, 3, 8, 6, 1, 7, 2, 0, 5},
        {2, 5, 8, 1, 4, 3, 6, 7, 9, 0}
    };

    private static  readonly uint[,] UnsignedIntegerQuasiGroupTable = new uint[10, 10]
    {
        {0, 3, 1, 7, 5, 9, 8, 6, 4, 2},
        {7, 0, 9, 2, 1, 5, 4, 8, 6, 3},
        {4, 2, 0, 6, 8, 7, 1, 3, 5, 9},
        {1, 7, 5, 0, 9, 8, 3, 4, 2, 6},
        {6, 1, 2, 3, 0, 4, 5, 9, 7, 8},
        {3, 6, 7, 4, 2, 0, 9, 5, 8, 1},
        {5, 8, 6, 9, 7, 2, 0, 1, 3, 4},
        {8, 9, 4, 5, 3, 6, 2, 0, 1, 7},
        {9, 4, 3, 8, 6, 1, 7, 2, 0, 5},
        {2, 5, 8, 1, 4, 3, 6, 7, 9, 0}
    };
    
    [Fact(DisplayName = "Constructor with valid int array creates instance")]
    public void Constructor_WithValidIntArray_ShouldCreateInstance()
    {
        // Act
        AntisymmetricQuasiGroup quasiGroup = IntegerQuasiGroupTable;

        // Assert
        Assert.NotNull(quasiGroup);
        Assert.Equal(0, quasiGroup[0, 0]);
        Assert.Equal(3, quasiGroup[0, 1]);
        Assert.Equal(9, quasiGroup[9, 8]);
    }

    [Fact(DisplayName = "Constructor with valid uint array creates instance")]
    public void Constructor_WithValidUintArray_ShouldCreateInstance()
    {
        // Act
        AntisymmetricQuasiGroup quasiGroup = UnsignedIntegerQuasiGroupTable;

        // Assert
        Assert.NotNull(quasiGroup);
        Assert.Equal(0u, quasiGroup[0u, 0u]);
        Assert.Equal(3u, quasiGroup[0u, 1u]);
        Assert.Equal(9u, quasiGroup[9u, 8u]);
    }

    [Fact(DisplayName = "Constructor with valid jagged int array creates instance")]
    public void Constructor_WithValidJaggedIntArray_ShouldCreateInstance()
    {
        // Arrange
        var jaggedIntTable = Enumerable
            .Range(0, 10).Select(i => Enumerable.Range(0, 10).Select(j => IntegerQuasiGroupTable[i, j]).ToArray())
            .ToArray();

        // Act
        AntisymmetricQuasiGroup quasiGroup = jaggedIntTable;

        // Assert
        Assert.NotNull(quasiGroup);
        Assert.Equal(0, quasiGroup[0, 0]);
        Assert.Equal(3, quasiGroup[0, 1]);
        Assert.Equal(9, quasiGroup[9, 8]);
    }

    [Fact(DisplayName = "Constructor with valid jagged uint array creates instance")]
    public void Constructor_WithValidJaggedUintArray_ShouldCreateInstance()
    {
        // Arrange
        var jaggedUintTable = Enumerable
            .Range(0, 10).Select(i => Enumerable.Range(0, 10).Select(j => UnsignedIntegerQuasiGroupTable[i, j]).ToArray())
            .ToArray();

        // Act
        AntisymmetricQuasiGroup quasiGroup = jaggedUintTable;

        // Assert
        Assert.NotNull(quasiGroup);
        Assert.Equal(0u, quasiGroup[0u, 0u]);
        Assert.Equal(3u, quasiGroup[0u, 1u]);
        Assert.Equal(9u, quasiGroup[9u, 8u]);
    }

    [Fact(DisplayName = "Constructor with invalid int array dimensions throws ArgumentException")]
    public void Constructor_WithInvalidDimensions_ShouldThrowArgumentException()
    {
        // Arrange
        var invalidTable = new int[5, 5];

        // Act & Assert
        var exception = Assert.Throws<ArgumentException>(() =>
        {
            AntisymmetricQuasiGroup _ = invalidTable;
        });

        Assert.Contains("must be a 10x10 matrix", exception.Message);
        Assert.Equal("table", exception.ParamName);
    }

    [Fact(DisplayName = "Constructor with invalid uint array dimensions throws ArgumentException")]
    public void Constructor_WithInvalidJaggedArrayDimensions_ShouldThrowArgumentException()
    {
        // Arrange
        var invalidJaggedTable = new int[5][];
        for (int i = 0; i < 5; i++)
        {
            invalidJaggedTable[i] = new int[5];
        }

        // Act & Assert
        var exception = Assert.Throws<ArgumentException>(() =>
        {
            AntisymmetricQuasiGroup _ = invalidJaggedTable;
        });

        Assert.Contains("must be a 10x10 matrix", exception.Message);
        Assert.Equal("table", exception.ParamName);
    }

    [Fact]
    public void Constructor_WithUnevenJaggedArray_ShouldThrowArgumentException()
    {
        // Arrange
        var unevenJaggedTable = new int[10][];
        for (int i = 0; i < 10; i++)
        {
            unevenJaggedTable[i] = new int[i + 1]; // Uneven row lengths
        }

        // Act & Assert
        var exception = Assert.Throws<ArgumentException>(() =>
        {
            AntisymmetricQuasiGroup _ = unevenJaggedTable;
        });

        Assert.Contains("must be a 10x10 matrix", exception.Message);
        Assert.Equal("table", exception.ParamName);
    }

    [Fact(DisplayName = "Int Indexer with valid indices returns correct value")]
    public void IntIndexer_WithValidIndices_ShouldReturnCorrectValue()
    {
        // Arrange
        AntisymmetricQuasiGroup quasiGroup = IntegerQuasiGroupTable;

        // Act & Assert
        Assert.Equal(0, quasiGroup[0, 0]);
        Assert.Equal(3, quasiGroup[0, 1]);
        Assert.Equal(7, quasiGroup[1, 0]);
        Assert.Equal(0, quasiGroup[9, 9]);
    }

    [Fact(DisplayName = "Uint Indexer with valid indices returns correct value")]
    public void UintIndexer_WithValidIndices_ShouldReturnCorrectValue()
    {
        // Arrange
        AntisymmetricQuasiGroup quasiGroup = UnsignedIntegerQuasiGroupTable;

        // Act & Assert
        Assert.Equal(0u, quasiGroup[0u, 0u]);
        Assert.Equal(3u, quasiGroup[0u, 1u]);
        Assert.Equal(7u, quasiGroup[1u, 0u]);
        Assert.Equal(0u, quasiGroup[9u, 9u]);
    }

    [Fact(DisplayName = "Int Indexer with invalid indices throws IndexOutOfRangeException")]
    public void IntIndexer_WithInvalidIndices_ShouldThrowIndexOutOfRangeException()
    {
        // Arrange
        AntisymmetricQuasiGroup quasiGroup = IntegerQuasiGroupTable;

        // Act & Assert
        Assert.Throws<IndexOutOfRangeException>(() => quasiGroup[10, 0]);
        Assert.Throws<IndexOutOfRangeException>(() => quasiGroup[0, 10]);
        Assert.Throws<IndexOutOfRangeException>(() => quasiGroup[-1, 0]);
        Assert.Throws<IndexOutOfRangeException>(() => quasiGroup[0, -1]);
    }
    
    [Fact(DisplayName = "Uint Indexer with invalid indices throws IndexOutOfRangeException")]
    public void UintIndexer_WithInvalidIndices_ShouldThrowIndexOutOfRangeException()
    {
        // Arrange
        AntisymmetricQuasiGroup quasiGroup = IntegerQuasiGroupTable;

        // Act & Assert
        Assert.Throws<IndexOutOfRangeException>(() => quasiGroup[10u, 0u]);
        Assert.Throws<IndexOutOfRangeException>(() => quasiGroup[0u, 10u]);
    }

    [Fact(DisplayName = "All values in quasi-group should be within valid range")]
    public void AllValuesInQuasiGroup_ShouldBeWithinValidRange()
    {
        // Arrange
        AntisymmetricQuasiGroup quasiGroup = IntegerQuasiGroupTable;

        // Act & Assert
        Assert.True(
            Enumerable.Range(0, 10).All(i => Enumerable.Range(0, 10).All(j => quasiGroup[i, j] is >= 0 and <= 9)),
            "All values in the quasi-group should be between 0 and 9");
    }
}