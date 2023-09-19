package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShareScreenStop28: ImageVector
  get() {
    if (_shareScreenStop28 != null) {
      return _shareScreenStop28!!
    }
    _shareScreenStop28 = fluentIcon(name = "Filled.ShareScreenStop28", 28f) {
      materialPath {
          moveTo(4.25F, 4.999F)
          horizontalLineToRelative(19.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(13.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(4.25F)
          curveTo(3.007F, 23.0F, 2.0F, 21.993F, 2.0F, 20.75F)
          verticalLineTo(7.25F)
          curveTo(2.0F, 6.007F, 3.007F, 5.0F, 4.25F, 5.0F)
          close()
          moveToRelative(7.028F, 5.218F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          lineToRelative(2.72F, 2.72F)
          lineToRelative(-2.721F, 2.725F)
          curveToRelative(-0.293F, 0.293F, -0.292F, 0.768F, 0.0F, 1.06F)
          curveToRelative(0.294F, 0.293F, 0.769F, 0.293F, 1.061F, 0.0F)
          lineToRelative(2.72F, -2.723F)
          lineToRelative(2.724F, 2.723F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.294F, -0.293F, 0.294F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.723F, -2.724F)
          lineToRelative(2.723F, -2.715F)
          curveToRelative(0.293F, -0.292F, 0.294F, -0.767F, 0.001F, -1.06F)
          curveToRelative(-0.292F, -0.294F, -0.767F, -0.295F, -1.06F, -0.002F)
          lineToRelative(-2.724F, 2.716F)
          lineToRelative(-2.72F, -2.72F)
          close()        
      }
    }
    return _shareScreenStop28!!
  }

private var _shareScreenStop28: ImageVector? = null
