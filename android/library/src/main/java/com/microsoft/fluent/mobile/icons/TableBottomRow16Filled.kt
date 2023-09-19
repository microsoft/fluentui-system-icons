package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableBottomRow16: ImageVector
  get() {
    if (_tableBottomRow16 != null) {
      return _tableBottomRow16!!
    }
    _tableBottomRow16 = fluentIcon(name = "Filled.TableBottomRow16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(3.0F, 13.5F)
          curveToRelative(-0.48F, -0.36F, -0.826F, -0.89F, -0.95F, -1.5F)
          curveTo(2.017F, 11.838F, 2.0F, 11.671F, 2.0F, 11.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(4.5F)
          curveToRelative(-0.563F, 0.0F, -1.082F, -0.186F, -1.5F, -0.5F)
          close()
          moveTo(13.95F, 12.0F)
          curveToRelative(0.033F, -0.162F, 0.05F, -0.329F, 0.05F, -0.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(0.5F)
          curveToRelative(0.563F, 0.0F, 1.082F, -0.186F, 1.5F, -0.5F)
          curveToRelative(0.48F, -0.36F, 0.826F, -0.89F, 0.95F, -1.5F)
          close()
          moveTo(6.0F, 14.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          close()        
      }
    }
    return _tableBottomRow16!!
  }

private var _tableBottomRow16: ImageVector? = null
