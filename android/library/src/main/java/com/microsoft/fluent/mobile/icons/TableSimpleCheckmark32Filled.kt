package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimpleCheckmark32: ImageVector
  get() {
    if (_tableSimpleCheckmark32 != null) {
      return _tableSimpleCheckmark32!!
    }
    _tableSimpleCheckmark32 = fluentIcon(name = "Filled.TableSimpleCheckmark32", 32f) {
      materialPath {
          moveTo(15.0F, 3.0F)
          horizontalLineTo(7.5F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(3.0F)
          close()
          moveTo(3.0F, 24.5F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(12.0F)
          horizontalLineTo(7.5F)
          curveTo(5.015F, 29.0F, 3.0F, 26.985F, 3.0F, 24.5F)
          close()
          moveTo(17.0F, 29.0F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineTo(17.0F)
          close()
          moveTo(29.0F, 7.5F)
          verticalLineTo(15.0F)
          horizontalLineTo(17.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(7.5F)
          curveTo(26.985F, 3.0F, 29.0F, 5.015F, 29.0F, 7.5F)
          close()
          moveToRelative(-2.543F, 14.457F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineTo(22.0F, 23.586F)
          lineToRelative(-1.293F, -1.293F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(3.75F, -3.75F)
          close()        
      }
    }
    return _tableSimpleCheckmark32!!
  }

private var _tableSimpleCheckmark32: ImageVector? = null
