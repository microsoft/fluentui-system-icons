package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableSimpleCheckmark32: ImageVector
  get() {
    if (_tableSimpleCheckmark32 != null) {
      return _tableSimpleCheckmark32!!
    }
    _tableSimpleCheckmark32 = fluentIcon(name = "Regular.TableSimpleCheckmark32", 32f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveTo(3.0F, 26.985F, 5.015F, 29.0F, 7.5F, 29.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-17.0F)
          curveTo(29.0F, 5.015F, 26.985F, 3.0F, 24.5F, 3.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveTo(5.0F, 24.5F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(10.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(7.5F)
          curveTo(6.12F, 27.0F, 5.0F, 25.88F, 5.0F, 24.5F)
          close()
          moveTo(5.0F, 15.0F)
          verticalLineTo(7.5F)
          curveTo(5.0F, 6.12F, 6.12F, 5.0F, 7.5F, 5.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(12.0F, 0.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(7.5F)
          curveTo(25.88F, 5.0F, 27.0F, 6.12F, 27.0F, 7.5F)
          verticalLineTo(15.0F)
          horizontalLineTo(17.0F)
          close()
          moveToRelative(8.707F, 4.543F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-3.75F, 3.75F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineToRelative(1.293F, 1.293F)
          lineToRelative(3.043F, -3.043F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          close()        
      }
    }
    return _tableSimpleCheckmark32!!
  }

private var _tableSimpleCheckmark32: ImageVector? = null
