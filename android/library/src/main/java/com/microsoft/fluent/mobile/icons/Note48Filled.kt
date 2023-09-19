package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Note48: ImageVector
  get() {
    if (_note48 != null) {
      return _note48!!
    }
    _note48 = fluentIcon(name = "Filled.Note48", 48f) {
      materialPath {
          moveTo(12.25F, 6.0F)
          curveTo(8.798F, 6.0F, 6.0F, 8.798F, 6.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveTo(6.0F, 39.202F, 8.798F, 42.0F, 12.25F, 42.0F)
          horizontalLineTo(26.0F)
          verticalLineToRelative(-9.75F)
          curveToRelative(0.0F, -3.452F, 2.798F, -6.25F, 6.25F, -6.25F)
          horizontalLineTo(42.0F)
          verticalLineTo(12.25F)
          curveTo(42.0F, 8.798F, 39.202F, 6.0F, 35.75F, 6.0F)
          horizontalLineToRelative(-23.5F)
          close()
          moveToRelative(29.197F, 22.5F)
          horizontalLineTo(32.25F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          verticalLineToRelative(9.197F)
          curveToRelative(0.682F, -0.308F, 1.31F, -0.739F, 1.848F, -1.278F)
          lineToRelative(9.821F, -9.82F)
          curveToRelative(0.54F, -0.54F, 0.97F, -1.167F, 1.278F, -1.849F)
          close()        
      }
    }
    return _note48!!
  }

private var _note48: ImageVector? = null
