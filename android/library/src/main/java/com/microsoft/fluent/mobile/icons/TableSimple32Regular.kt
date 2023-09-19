package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableSimple32: ImageVector
  get() {
    if (_tableSimple32 != null) {
      return _tableSimple32!!
    }
    _tableSimple32 = fluentIcon(name = "Regular.TableSimple32", 32f) {
      materialPath {
          moveTo(3.0F, 7.5F)
          curveTo(3.0F, 5.015F, 5.015F, 3.0F, 7.5F, 3.0F)
          horizontalLineToRelative(17.0F)
          curveTo(26.985F, 3.0F, 29.0F, 5.015F, 29.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-17.0F)
          curveTo(5.015F, 29.0F, 3.0F, 26.985F, 3.0F, 24.5F)
          verticalLineToRelative(-17.0F)
          close()
          moveTo(7.5F, 5.0F)
          curveTo(6.12F, 5.0F, 5.0F, 6.12F, 5.0F, 7.5F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(5.0F)
          horizontalLineTo(7.5F)
          close()
          moveTo(17.0F, 5.0F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(7.5F)
          curveTo(27.0F, 6.12F, 25.88F, 5.0F, 24.5F, 5.0F)
          horizontalLineTo(17.0F)
          close()
          moveToRelative(-2.0F, 12.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(7.5F)
          curveTo(5.0F, 25.88F, 6.12F, 27.0F, 7.5F, 27.0F)
          horizontalLineTo(15.0F)
          verticalLineTo(17.0F)
          close()
          moveToRelative(2.0F, 10.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(17.0F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(10.0F)
          close()        
      }
    }
    return _tableSimple32!!
  }

private var _tableSimple32: ImageVector? = null
