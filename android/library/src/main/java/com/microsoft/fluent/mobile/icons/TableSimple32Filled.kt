package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimple32: ImageVector
  get() {
    if (_tableSimple32 != null) {
      return _tableSimple32!!
    }
    _tableSimple32 = fluentIcon(name = "Filled.TableSimple32", 32f) {
      materialPath {
          moveTo(17.0F, 29.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineTo(17.0F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(12.0F)
          close()
          moveToRelative(0.0F, -14.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(7.5F)
          curveTo(29.0F, 5.015F, 26.985F, 3.0F, 24.5F, 3.0F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(12.0F)
          close()
          moveTo(15.0F, 3.0F)
          verticalLineToRelative(12.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(7.5F)
          curveTo(3.0F, 5.015F, 5.015F, 3.0F, 7.5F, 3.0F)
          horizontalLineTo(15.0F)
          close()
          moveToRelative(0.0F, 14.0F)
          verticalLineToRelative(12.0F)
          horizontalLineTo(7.5F)
          curveTo(5.015F, 29.0F, 3.0F, 26.985F, 3.0F, 24.5F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(12.0F)
          close()        
      }
    }
    return _tableSimple32!!
  }

private var _tableSimple32: ImageVector? = null
