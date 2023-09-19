package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ListBar16: ImageVector
  get() {
    if (_listBar16 != null) {
      return _listBar16!!
    }
    _listBar16 = fluentIcon(name = "Filled.ListBar16", 16f) {
      materialPath {
          moveTo(6.0F, 14.0F)
          horizontalLineToRelative(6.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-0.5F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          close()
          moveToRelative(0.0F, -4.0F)
          horizontalLineToRelative(6.75F)
          curveTo(13.44F, 10.0F, 14.0F, 9.44F, 14.0F, 8.75F)
          verticalLineToRelative(-1.5F)
          curveTo(14.0F, 6.56F, 13.44F, 6.0F, 12.75F, 6.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(5.0F, 6.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.25F)
          curveTo(2.56F, 10.0F, 2.0F, 9.44F, 2.0F, 8.75F)
          verticalLineToRelative(-1.5F)
          curveTo(2.0F, 6.56F, 2.56F, 6.0F, 3.25F, 6.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(1.0F, -1.0F)
          horizontalLineToRelative(6.75F)
          curveTo(13.44F, 5.0F, 14.0F, 4.44F, 14.0F, 3.75F)
          verticalLineToRelative(-0.5F)
          curveTo(14.0F, 2.56F, 13.44F, 2.0F, 12.75F, 2.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          close()
          moveTo(5.0F, 2.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(3.25F)
          curveTo(2.56F, 5.0F, 2.0F, 4.44F, 2.0F, 3.75F)
          verticalLineToRelative(-0.5F)
          curveTo(2.0F, 2.56F, 2.56F, 2.0F, 3.25F, 2.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(0.0F, 9.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(3.25F)
          curveTo(2.56F, 14.0F, 2.0F, 13.44F, 2.0F, 12.75F)
          verticalLineToRelative(-0.5F)
          curveTo(2.0F, 11.56F, 2.56F, 11.0F, 3.25F, 11.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _listBar16!!
  }

private var _listBar16: ImageVector? = null
