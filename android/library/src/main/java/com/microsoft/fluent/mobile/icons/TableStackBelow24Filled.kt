package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableStackBelow24: ImageVector
  get() {
    if (_tableStackBelow24 != null) {
      return _tableStackBelow24!!
    }
    _tableStackBelow24 = fluentIcon(name = "Filled.TableStackBelow24", 24f) {
      materialPath {
          moveTo(9.5F, 9.5F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(8.0F, 9.5F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(3.75F)
          curveToRelative(-0.199F, 0.0F, -0.39F, -0.079F, -0.53F, -0.22F)
          curveTo(3.079F, 14.14F, 3.0F, 13.95F, 3.0F, 13.75F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(5.0F)
          close()
          moveTo(9.5F, 8.0F)
          horizontalLineToRelative(5.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(5.0F)
          close()
          moveTo(16.0F, 9.5F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(4.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(21.0F, 8.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(1.75F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineTo(8.0F)
          close()
          moveTo(8.0F, 8.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(5.0F)
          close()
          moveTo(3.75F, 19.5F)
          curveTo(3.336F, 19.5F, 3.0F, 19.836F, 3.0F, 20.25F)
          reflectiveCurveTo(3.336F, 21.0F, 3.75F, 21.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(3.75F)
          close()        
      }
    }
    return _tableStackBelow24!!
  }

private var _tableStackBelow24: ImageVector? = null
