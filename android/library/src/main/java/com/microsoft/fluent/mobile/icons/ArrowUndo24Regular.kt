package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUndo24: ImageVector
  get() {
    if (_arrowUndo24 != null) {
      return _arrowUndo24!!
    }
    _arrowUndo24 = fluentIcon(name = "Regular.ArrowUndo24", 24f) {
      materialPath {
          moveTo(4.75F, 2.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(5.5F, 2.75F)
          verticalLineToRelative(5.69F)
          lineToRelative(4.574F, -4.56F)
          curveToRelative(2.442F, -2.442F, 6.365F, -2.501F, 8.879F, -0.179F)
          lineToRelative(0.186F, 0.18F)
          curveToRelative(2.503F, 2.502F, 2.503F, 6.56F, 0.0F, 9.063F)
          lineToRelative(-8.846F, 8.84F)
          curveToRelative(-0.293F, 0.292F, -0.767F, 0.292F, -1.06F, -0.001F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          lineToRelative(8.845F, -8.84F)
          curveToRelative(1.917F, -1.917F, 1.917F, -5.025F, 0.0F, -6.942F)
          curveToRelative(-1.86F, -1.86F, -4.838F, -1.916F, -6.766F, -0.168F)
          lineToRelative(-0.178F, 0.169F)
          lineTo(6.562F, 9.5F)
          horizontalLineToRelative(5.688F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(13.0F, 10.25F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(12.25F, 11.0F)
          horizontalLineToRelative(-7.5F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(4.0F, 10.25F)
          verticalLineToRelative(-7.5F)
          curveTo(4.0F, 2.336F, 4.336F, 2.0F, 4.75F, 2.0F)
          close()        
      }
    }
    return _arrowUndo24!!
  }

private var _arrowUndo24: ImageVector? = null
