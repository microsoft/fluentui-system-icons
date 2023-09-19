package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableStackRight24: ImageVector
  get() {
    if (_tableStackRight24 != null) {
      return _tableStackRight24!!
    }
    _tableStackRight24 = fluentIcon(name = "Filled.TableStackRight24", 24f) {
      materialPath {
          moveTo(8.0F, 3.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(5.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(0.0F, 6.5F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(1.5F, 5.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(8.0F, 16.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(1.75F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(1.5F, 5.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(4.25F)
          curveToRelative(0.0F, 0.199F, -0.079F, 0.39F, -0.22F, 0.53F)
          curveToRelative(-0.14F, 0.141F, -0.33F, 0.22F, -0.53F, 0.22F)
          horizontalLineTo(9.5F)
          close()
          moveToRelative(0.0F, -13.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(4.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveToRelative(10.0F, 12.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(21.0F, 20.664F, 21.0F, 20.25F)
          verticalLineTo(3.75F)
          curveTo(21.0F, 3.336F, 20.664F, 3.0F, 20.25F, 3.0F)
          reflectiveCurveTo(19.5F, 3.336F, 19.5F, 3.75F)
          verticalLineToRelative(16.5F)
          close()        
      }
    }
    return _tableStackRight24!!
  }

private var _tableStackRight24: ImageVector? = null
