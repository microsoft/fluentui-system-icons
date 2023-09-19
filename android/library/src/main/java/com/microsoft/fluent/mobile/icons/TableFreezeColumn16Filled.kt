package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableFreezeColumn16: ImageVector
  get() {
    if (_tableFreezeColumn16 != null) {
      return _tableFreezeColumn16!!
    }
    _tableFreezeColumn16 = fluentIcon(name = "Filled.TableFreezeColumn16", 16f) {
      materialPath {
          moveTo(13.0F, 11.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(1.5F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineToRelative(7.0F)
          close()
          moveTo(10.0F, 10.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveTo(5.0F, 5.0F)
          verticalLineTo(2.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveTo(2.0F, 6.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(0.0F, 5.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          close()        
      }
    }
    return _tableFreezeColumn16!!
  }

private var _tableFreezeColumn16: ImageVector? = null
