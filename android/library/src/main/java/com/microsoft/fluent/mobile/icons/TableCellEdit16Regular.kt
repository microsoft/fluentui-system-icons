package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableCellEdit16: ImageVector
  get() {
    if (_tableCellEdit16 != null) {
      return _tableCellEdit16!!
    }
    _tableCellEdit16 = fluentIcon(name = "Regular.TableCellEdit16", 16f) {
      materialPath {
          moveTo(10.944F, 5.0F)
          lineToRelative(-1.0F, 1.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.982F)
          curveTo(5.766F, 10.286F, 5.588F, 10.632F, 5.476F, 11.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 11.0F, 2.0F, 10.328F, 2.0F, 9.5F)
          verticalLineToRelative(-3.0F)
          curveTo(2.0F, 5.672F, 2.672F, 5.0F, 3.5F, 5.0F)
          horizontalLineToRelative(7.444F)
          close()
          moveTo(3.0F, 9.5F)
          curveTo(3.0F, 9.776F, 3.224F, 10.0F, 3.5F, 10.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 6.0F, 3.0F, 6.224F, 3.0F, 6.5F)
          verticalLineToRelative(3.0F)
          close()
          moveToRelative(3.98F, 0.877F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.73F, -0.73F, 1.914F, -0.73F, 2.644F, 0.0F)
          curveToRelative(0.73F, 0.731F, 0.73F, 1.915F, 0.0F, 2.646F)
          lineToRelative(-4.83F, 4.829F)
          curveToRelative(-0.281F, 0.282F, -0.634F, 0.481F, -1.02F, 0.578F)
          lineToRelative(-1.498F, 0.374F)
          curveToRelative(-0.651F, 0.163F, -1.242F, -0.427F, -1.079F, -1.078F)
          lineToRelative(0.375F, -1.498F)
          curveToRelative(0.096F, -0.386F, 0.296F, -0.74F, 0.578F, -1.02F)
          close()        
      }
    }
    return _tableCellEdit16!!
  }

private var _tableCellEdit16: ImageVector? = null
