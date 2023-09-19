package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextFontSize20: ImageVector
  get() {
    if (_textFontSize20 != null) {
      return _textFontSize20!!
    }
    _textFontSize20 = fluentIcon(name = "Regular.TextFontSize20", 20f) {
      materialPath {
          moveTo(13.0F, 3.5F)
          curveToRelative(0.209F, 0.0F, 0.395F, 0.13F, 0.468F, 0.324F)
          lineToRelative(2.996F, 7.99F)
          lineToRelative(0.008F, 0.021F)
          lineToRelative(1.496F, 3.99F)
          curveToRelative(0.097F, 0.258F, -0.034F, 0.546F, -0.292F, 0.643F)
          curveToRelative(-0.259F, 0.097F, -0.547F, -0.034F, -0.644F, -0.292F)
          lineTo(15.654F, 12.5F)
          horizontalLineToRelative(-5.307F)
          lineToRelative(-1.379F, 3.676F)
          curveToRelative(-0.072F, 0.193F, -0.256F, 0.322F, -0.462F, 0.324F)
          curveToRelative(-0.207F, 0.002F, -0.393F, -0.123F, -0.47F, -0.314F)
          lineTo(6.962F, 13.5F)
          horizontalLineTo(4.039F)
          lineToRelative(-1.075F, 2.686F)
          curveToRelative(-0.102F, 0.256F, -0.393F, 0.38F, -0.65F, 0.278F)
          curveToRelative(-0.256F, -0.102F, -0.38F, -0.393F, -0.278F, -0.65F)
          lineToRelative(1.196F, -2.989F)
          lineToRelative(0.008F, -0.021F)
          lineToRelative(1.796F, -4.49F)
          curveTo(5.112F, 8.124F, 5.296F, 8.0F, 5.5F, 8.0F)
          curveToRelative(0.205F, 0.0F, 0.388F, 0.124F, 0.464F, 0.314F)
          lineToRelative(1.796F, 4.49F)
          lineToRelative(0.009F, 0.021F)
          lineToRelative(0.716F, 1.791F)
          lineToRelative(1.043F, -2.78F)
          lineToRelative(0.008F, -0.022F)
          lineToRelative(2.996F, -7.99F)
          curveTo(12.605F, 3.63F, 12.792F, 3.5F, 13.0F, 3.5F)
          close()
          moveToRelative(-2.278F, 8.0F)
          horizontalLineToRelative(4.557F)
          lineTo(13.0F, 5.424F)
          lineTo(10.722F, 11.5F)
          close()
          moveToRelative(-4.16F, 1.0F)
          lineTo(5.5F, 9.846F)
          lineTo(4.44F, 12.5F)
          horizontalLineToRelative(2.123F)
          close()        
      }
    }
    return _textFontSize20!!
  }

private var _textFontSize20: ImageVector? = null
