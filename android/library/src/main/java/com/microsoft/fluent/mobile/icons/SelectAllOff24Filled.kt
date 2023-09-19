package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SelectAllOff24: ImageVector
  get() {
    if (_selectAllOff24 != null) {
      return _selectAllOff24!!
    }
    _selectAllOff24 = fluentIcon(name = "Filled.SelectAllOff24", 24f) {
      materialPath {
          moveTo(20.496F, 5.627F)
          curveTo(21.372F, 5.935F, 22.0F, 6.769F, 22.0F, 7.75F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          horizontalLineToRelative(-10.0F)
          curveToRelative(-0.981F, 0.0F, -1.816F, -0.628F, -2.123F, -1.504F)
          lineTo(7.724F, 20.5F)
          horizontalLineTo(17.75F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-10.0F)
          lineToRelative(-0.004F, -0.051F)
          verticalLineTo(5.627F)
          close()
          moveTo(17.246F, 2.0F)
          curveToRelative(1.244F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(12.997F)
          curveToRelative(0.0F, 1.242F, -1.006F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(4.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.008F, -2.25F, -2.25F)
          verticalLineTo(4.25F)
          curveTo(2.0F, 3.007F, 3.007F, 2.0F, 4.25F, 2.0F)
          horizontalLineToRelative(12.997F)
          close()        
      }
    }
    return _selectAllOff24!!
  }

private var _selectAllOff24: ImageVector? = null
